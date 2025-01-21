from flask import Blueprint,request
from flask_jwt_extended import jwt_required, get_jwt_identity
from utils import quick_response,is_product_id_valid,get_from_database,update_row_database

from .cart_helpers import update_cart_product_quantity,delete_cart_product,get_cart_from_database
# create a blueprint for cart
cart_bp = Blueprint('cart',__name__)

# add an endpoint that " adds a new product to the cart"
@cart_bp.route("/add-item/<string:product_id>",methods=["PUT"])
@jwt_required()
def add_item_to_cart(product_id):
    user_id = get_jwt_identity()
    quantity = 1

    # check if product-id is in database
    if not is_product_id_valid(product_id):
        return quick_response("Invalid product id",False,400)
    
    exec_statement = """INSERT INTO cart_items VALUES (%s, %s, %s)"""
    data_list = [user_id,product_id,quantity]
    db_cart_update = update_row_database(exec_statement,data_list)

    if not db_cart_update:
        return quick_response("Failed adding item to cart",False,400)
    if db_cart_update == "DB_ERROR":
        return quick_response("an error occured, please try again", False, 500)
    if db_cart_update == "IntegrityError":
        # if true this product already in cart, just update quantity
        db_cart_quantity_update = update_cart_product_quantity(user_id,product_id,1)
        if not db_cart_quantity_update:
            return quick_response("Failed adding item to cart",False,400)
        return quick_response("updated in-cart product quantity (+1)")
        
    return quick_response("product added to cart")

@cart_bp.route("/remove-item/<string:product_id>",methods=["DELETE"])
@jwt_required()
def remove_item_from_cart(product_id):
    user_id = get_jwt_identity()
    remove_type=request.args.get("type")

    # check if product-id is in database
    if not is_product_id_valid(product_id):
        return quick_response("Invalid product id",False,400)

    if remove_type =="one":
        db_cart_quantity_update = update_cart_product_quantity(user_id,product_id,-1)
        if not db_cart_quantity_update:
            return quick_response("Product not in cart",False,400)
        return quick_response("updated in-cart product quantity (-1)")
    
    elif remove_type == "all":
        db_cart_product_delete= delete_cart_product(user_id,product_id)
        if not db_cart_product_delete:
            return quick_response("Product not in cart",False,400)
        return quick_response("Product removed from cart")
    
    else:
        return quick_response("Invalid remove type, [`one`, `all`]",False,400)
    
@cart_bp.route("/items")
@jwt_required()
def get_cart():
    user_id=get_jwt_identity()
    cart = get_cart_from_database(user_id)

    if not cart:
        return quick_response("Cart is empty")
    if cart == "DB_ERROR":
        return quick_response("an error occured, please try again", False, 500)
    return quick_response(cart)
    # # exec_statement = """SELECT product_id, quantity from cart_items WHERE user_id = %s"""
    # exec_statement = """SELECT
    #                     p.product_id,p.product_name,p.product_category,
    #                     p.product_price,cart_items.quantity,p.product_img
    #                     from cart_items
    #                     join products p on p.product_id = cart_items.product_id where user_id = %s """
    # db_cart_products = get_from_database(exec_statement,user_id)
    # db_cart_total = 0

    # for product in db_cart_products:
    #     price, quantity = [product["product_price"],product["quantity"]]
    #     product["total_price"]=  price * quantity
    #     db_cart_total += product["total_price"]
    
    # if not db_cart_products:
    #     return quick_response("Cart is empty")
    # if db_cart_products == "DB_ERROR":
    #     return quick_response("an error occured, please try again", False, 500)
    
    # response = {
    #     "products_list":db_cart_products,
    #     "cart_total":db_cart_total
    # }
    # return quick_response(response)
    