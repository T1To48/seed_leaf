from flask import Blueprint,request
from flask_jwt_extended import jwt_required, get_jwt_identity
from utils import quick_response,is_product_id_valid,get_from_database,update_row_database

from .cart_helpers import update_cart_product_quantity
# create a blueprint for cart
cart_bp = Blueprint('cart',__name__)

# add an endpoint that " adds a new product to the cart"
@cart_bp.route("/add-item/<string:product_id>",methods=["PUT"])
@jwt_required()
def add_item_to_cart(product_id):
    user_id = get_jwt_identity()
    quantity = 1
    if not is_product_id_valid(product_id):
        return quick_response("Invalid product id",False,400)
    
    exec_statement = """INSERT INTO cart_items VALUES (%s, %s, %s)"""
    data_list = [user_id,product_id,quantity]
    db_cart_update = update_row_database(exec_statement,data_list)

    if not db_cart_update:
        return quick_response("Failed adding item to cart",400)
    if db_cart_update == "DB_ERROR":
        return quick_response("an error occured, please try again", False, 500)
    if db_cart_update == "IntegrityError":
        # if true this product already in cart, just update quantity
        db_cart_quantity_update = update_cart_product_quantity(user_id,product_id)
        if not db_cart_quantity_update:
            return quick_response("Failed adding item to cart",400)
        return quick_response("updated in-cart product quantity")
        


    return quick_response("product added to cart")