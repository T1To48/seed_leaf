from utils import get_from_database,update_row_database

def get_cart_product_quantity(user_id,product_id):
    exec_statement = """SELECT quantity FROM cart_items WHERE user_id = %s AND product_id = %s"""
    cart_product_quantity = get_from_database(exec_statement,[user_id,product_id],True)

    if not cart_product_quantity:
        return False

    return cart_product_quantity.get("quantity")

def update_cart_product_quantity(user_id,product_id,delta):
    quantity = get_cart_product_quantity(user_id,product_id)
    if not quantity:
        return False
    if quantity == 1 and delta == -1:
        return delete_cart_product(user_id,product_id)

    quantity +=delta
    exec_statement = """UPDATE cart_items SET quantity = %s WHERE user_id = %s AND product_id = %s"""
    data_list = [quantity,user_id,product_id]
    db_cart_update = update_row_database(exec_statement,data_list)
    
    if db_cart_update and db_cart_update not in {"DB_ERROR","IntegrityError"}:
        return True
    return False


def delete_cart_product(user_id,product_id):
    exec_statement = """DELETE FROM cart_items WHERE user_id = %s AND product_id = %s"""
    db_cart_product_delete = update_row_database(exec_statement,[user_id,product_id])

    if db_cart_product_delete and db_cart_product_delete not in {"DB_ERROR","IntegrityError"}:
        return True
    
    return False

def get_cart_from_database(user_id):
    exec_statement = """SELECT
                        p.product_id,p.product_name,p.product_category,
                        p.product_price,cart_items.quantity,p.product_img
                        from cart_items
                        join products p on p.product_id = cart_items.product_id where user_id = %s """
    
    db_cart_products = get_from_database(exec_statement,[user_id])
    db_cart_total = 0

    if not db_cart_products:
        return None
    if db_cart_products == "DB_ERROR":
        return "DB_ERROR"

    for product in db_cart_products:
        price, quantity = [product["product_price"],product["quantity"]]
        product["total_price"]=  price * quantity
        db_cart_total += product["total_price"]
    
    cart = {
        "products_list":db_cart_products,
        "cart_total":db_cart_total
    }
    return cart

