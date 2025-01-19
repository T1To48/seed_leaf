from config import connect_db
from mysql.connector import Error,IntegrityError


def get_from_database(exec_statement,data_list,one_row_result=False,dictionary=True):
    try:

        connection = connect_db()
        if not connection:
            return "DB_ERROR"
        cursor = connection.cursor(dictionary=dictionary)
        if not data_list:
            cursor.execute(exec_statement)
        else:
            cursor.execute(exec_statement,data_list)
            
        cursor_result = cursor.fetchall()
        if not cursor_result:
            return None
        if one_row_result:
            return cursor_result[0]
        else:
            return cursor_result
    except Error as err:

        print("👺"*8,err)
        return "DB_ERROR"
    finally:

        if connection and connection.is_connected():
            cursor.close()
            connection.close()

def update_row_database(exec_statement,data_list):
    try:
        connection = connect_db()
        if not connection:
            return "DB_ERROR"
        cursor = connection.cursor()
        cursor.execute(exec_statement,data_list)
        if cursor.rowcount != 1:
            return None
        connection.commit()
        return True
    except IntegrityError as err:
        print("👺 "*8)
        print("IntegrityError=>",err)
        if connection.is_connected():
            connection.rollback()
        return "IntegrityError"
    except Error as err:
        print("👺"*8,err)
        if connection.is_connected():
            connection.rollback()
        return "DB_ERROR"
        
    finally:
        if connection and connection.is_connected():
            cursor.close()
            connection.close()
    

def count_orders_database(user_id):
    exec_statement = """SELECT COUNT(*) AS orders_count FROM orders WHERE user_id = %s"""
    orders_count = get_from_database(exec_statement,[user_id],True)["orders_count"]
    return int(orders_count)

def count_products_database(category,min_price,max_price):
    data_list = [category,min_price,max_price]

    exec_statement = """SELECT COUNT(*) FROM products WHERE product_category = %s AND product_price BETWEEN %s AND %s"""
    if category == "all":
        data_list = data_list[1:]
        exec_statement = """SELECT COUNT(*) FROM products WHERE product_price BETWEEN %s AND %s"""
    
    products_count = get_from_database(exec_statement,data_list,True,False)[0]
 
    return int(products_count)

def get_products_price_range(category):

    data_list = [category]
    exec_statement = """SELECT MIN(product_price) , MAX(product_price) FROM products WHERE product_category = %s"""
   
    if category == "all":
        data_list = None
        exec_statement = """SELECT MIN(product_price) , MAX(product_price) FROM products"""
    
    price_range = get_from_database(exec_statement,data_list,True,False)

    price_range = map(float,price_range)
    return list(price_range)

def is_product_id_valid(product_id):
    exec_statement = """SELECT product_id FROM products WHERE product_id = %s"""
    product_id_database = get_from_database(exec_statement,[product_id],True)
    print(product_id_database)
    if not product_id_database:
        return False
    product_id_database = product_id_database.get("product_id")
    return product_id == product_id_database
