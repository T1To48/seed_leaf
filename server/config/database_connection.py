import mysql.connector
from mysql.connector import Error
from .database_config import db_config

db_config['database'] ='seed_leaf'

def connect_db():
    connection = None
    try:
        connection = mysql.connector.connect(**db_config)

        if connection.is_connected():
            print('connected to seed_leaf DB')
        else:
            print('connection failed!')
            
    except Error as err:
        print(err)

    return connection
