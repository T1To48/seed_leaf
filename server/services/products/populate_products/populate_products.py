from .products_list import microgreens_list,herbs_list

def populate_products_list(connection):
    cursor = connection.cursor()

    for product in herbs_list:
        product =list(product.values())       
        cursor.execute(""" INSERT INTO products VALUES (%s, %s, %s, %s, %s, %s) """,product)
        # cursor.execute(""" delete from products""")
    connection.commit()
    cursor.close()
    connection.close()