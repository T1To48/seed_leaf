from utils import get_from_database,update_row_database

def get_cart_product_quantity(user_id,product_id):
    exec_statement = """SELECT quantity FROM cart_items WHERE user_id = %s AND product_id = %s"""
    return get_from_database(exec_statement,[user_id,product_id],True).get("quantity")

def update_cart_product_quantity(user_id,product_id):
    quantity = get_cart_product_quantity(user_id,product_id)
    quantity +=1
    exec_statement = """UPDATE cart_items SET quantity = %s WHERE user_id = %s AND product_id = %s"""
    data_list = [quantity,user_id,product_id]
    db_cart_update = update_row_database(exec_statement,data_list)
    
    if db_cart_update and db_cart_update != "DB_ERROR" and db_cart_update!= "IntegrityError":
        return True
    return False
