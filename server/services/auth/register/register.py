# from mysql.connector import IntegrityError

# from flask import Blueprint,request
# from config import connect_db
from utils import (is_email_valid,
                   is_password_valid,is_info_valid,
                   hash_password,remove_white_spaces,
                   generate_unique_ID)

def validate_user_registeration(request):
    error={
        "success":False,
    }

    if not request.is_json:
        error["message"] = "Invalid request body object"
        return error
    
    user_info=request.get_json()

    name = user_info.get("name")
    email = user_info.get("email")
    password = user_info.get("password")
    address = user_info.get("address")

    if not is_info_valid(name,3):
        error["message"] = "Invalid Name"
        return error 
    if not is_email_valid(email):
        error["message"] = "Invalid Email Address"
        return error
    if not is_password_valid(password):
        error["message"] = "Invalid Password"
        return error
    if not is_info_valid(address,5):
        error["message"] = "Invalid Address"
        return error
    
    user_id = generate_unique_ID()
    name, email, address = remove_white_spaces([name,email,address])
    password_hash = hash_password(password)
    validated_user_data =(user_id,name, email, password_hash,address)
    
    return {
        "success":True,
            "data":validated_user_data
            }

