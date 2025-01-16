import mysql.connector
from mysql.connector import Error
from database_config import db_config

def create_db():
    connection = None
    try:
        connection = mysql.connector.connect(**db_config)
        if connection.is_connected():
            print('connected to mysql DB')
            cursor = connection.cursor()
            query = "CREATE DATABASE seed_leaf"
            cursor.execute(query)
            connection.commit()
            print('successfully created new DB (seed_leaf)')
            cursor.close()
            connection.close()

    except Error as err:
        print(err)
    return connection

# create_db()
