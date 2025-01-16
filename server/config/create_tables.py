from database_connection import connect_db
from tables import tables_array

def createTables():
    connection = connect_db()
    if connection:
        cursor = connection.cursor()
        for table in tables_array:
            cursor.execute(table)
        connection.commit()
        print("All tables where successfully created")
        cursor.close()
        connection.close()


# createTables()
