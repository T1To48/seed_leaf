from flask import Blueprint,request,jsonify
import math 

from flask_jwt_extended import jwt_required,get_jwt,get_jwt_identity
from config import connect_db

from .orders_helpers import add_order_database,populate_order_products_database
from ..cart.cart_helpers import get_cart_from_database
from utils import (quick_response,generate_unique_ID,
                   get_from_database,count_orders_database)



orders_bp=Blueprint("orders",__name__)

@orders_bp.route("/new",methods=["POST"])
@jwt_required()
def create_new_order():

    #$ required for future payment details (credit card details) AS request's Body
    if not request.is_json and False:
        return quick_response("Invalid request body object",False,400)
    user_id=get_jwt_identity()
    
    # 1.get Cart from database
    cart = get_cart_from_database(user_id)

    if not cart:
         return quick_response("Cart is Empty",False,400)
    if cart == "DB_ERROR":
         return quick_response("an error occured, please try again",False,500)
    
    order_id = generate_unique_ID()
    order_price = cart.get("cart_total")
    cart_products_list = cart.get("products_list")
    # 3. make payment    
    #  is_paid = make_payment(creditcard_details, order_price)

    # 4. add new order to orders table in database 
    db_new_order = add_order_database(user_id,order_id,order_price)
    if not db_new_order:
         return quick_response("Order creation failed",False,400)
    
    # 5. add order_products to order_products_junction in database 
    db_order_products = populate_order_products_database(order_id,cart_products_list)
    if not db_order_products:
         return quick_response("failed populating order products",False,400)
    return quick_response("order added succefully")
        
    #` helper FUNCTION  [D.R.Y]       
    connection = connect_db()
    cursor=connection.cursor()
    cursor.execute("""INSERT INTO orders (order_id,user_id, order_price)
                   VALUES (%s, %s, %s)""",[order_id,user_id,order_price])
    
    if cursor.rowcount !=1:
        cursor.close()
        connection.close()
        return quick_response("failed to insert order to db",False,400)
    
    connection.commit()
    cursor.close()
    connection.close()
    return quick_response("order added succefully")

@orders_bp.route("/order-details/<string:order_id>")
@jwt_required()
def get_order_by_id(order_id):
    user_id=get_jwt_identity()
    
    connection = connect_db()
    cursor = connection.cursor(dictionary=True)
    cursor.execute(""" SELECT * FROM orders WHERE order_id = %s AND user_id=%s """,[order_id,user_id])
    cursor_result = cursor.fetchone()

    if not cursor_result:
            return quick_response("Order not found",False,400)
    
    cursor_result.pop("user_id",None)

    return quick_response(cursor_result)

@orders_bp.route("/list")
@jwt_required()
def get_orders_list():
    user_id=get_jwt_identity()

    allowed_columns={"order_price","date_time"}
    allowed_directions={"ASC","DESC"}
    
    sortby_column =request.args.get("sortby_column","date_time").lower()
    sortby_direction=request.args.get("sortby_direction","DESC").upper()
    current_page = request.args.get("page",1)


    orders_count=count_orders_database(user_id)
    orders_limit_per_page=10
    total_pages=math.ceil(orders_count/orders_limit_per_page)

    if total_pages == 0:
             return quick_response("No Orders where found",False,400)

    try:
        current_page = int(current_page)
        
        if current_page <0 or current_page>total_pages:
             raise ValueError
        
    except (ValueError,TypeError):
        return quick_response("Invalid page number",False,400)
    
    offset=(current_page - 1) * orders_limit_per_page
    

    if sortby_column not in allowed_columns or sortby_direction not in allowed_directions:
         return quick_response("Invalid sorting column / direction",False,400)
    
    
    exec_statement=""" SELECT order_id, order_price, date_time FROM orders
                       WHERE user_id = %s ORDER BY """ + f"{sortby_column} {sortby_direction}" + """
                       LIMIT %s, %s"""
    
    orders_list=get_from_database(exec_statement,[user_id,offset,orders_limit_per_page])
    
    response={
         "current_page":current_page,
         "total_pages":total_pages,
         "orders_list":orders_list
    }
    # get the total orders count 
    # calc the total pages count
    # get current page the offset limit,  orders
    # send response the  [orders for the current page] and  [total pages count] and [total product count]
    if not orders_list:
         return quick_response("No Orders where found",False,400)
    elif orders_list == "DB_ERROR":
         return quick_response("an error occured, please try again",False,500)
    return quick_response(response)
    # list_configurations (filter and sort)
    # 1.search by => order_id
    #2.sort by => price | date
    # 3.search, by product name => if an order contain a product name that was typed, it is returned
    #4 pagination => return order list as chunks (according to the current page number)
    # request.args
