from utils import update_row_database,update_many_rows_database

def add_order_database(user_id,order_id,order_price):
    exec_statement = """INSERT INTO orders (order_id,user_id, order_price) VALUES (%s, %s, %s)"""
    data_list = [order_id,user_id,order_price]
    db_new_order = update_row_database(exec_statement,data_list)
    # print("🦒"*12,db_new_order)
    if  not db_new_order or db_new_order  in ["DB_ERROR","IntegrityError"]:
        return False
    return True

def populate_order_products_database(order_id,cart_products_list):
    cart_products_list = convert_to_lists(cart_products_list,order_id)
    exec_statement = """INSERT INTO order_products_junction (order_id,product_id,quantity,purchase_price) VALUES (%s, %s, %s,%s) """
    db_order_products_populate = update_many_rows_database(exec_statement,cart_products_list)
    print("🦒"*12,cart_products_list)

    if not db_order_products_populate or db_order_products_populate == "DB_ERROR":
        return False

    return True


def convert_to_lists(dicts_list,order_id):
    for indx, dict  in enumerate(dicts_list):
        dicts_list[indx] = [
            order_id,
            dict["product_id"],
            dict["quantity"],
            dict["product_price"]
        ]
    return dicts_list
