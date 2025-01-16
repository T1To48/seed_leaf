
from config import connect_db
from utils import (is_email_valid,
                   is_password_valid)

def validate_user_login(request):
    error={
        "success":False,
    }

    if not request.is_json:
        error["message"] = "Invalid request body object"
        return error
    
    user_info=request.get_json()

    if not user_info:
        error["message"] = "Invalid request body object"
        return error
    
    email = user_info.get("email")
    password = user_info.get("password")

    if not is_email_valid(email):
        error["message"] = "Invalid Email Address"
        return error
    if not is_password_valid(password):
        error["message"] = "Invalid Password"
        return error
    
    email = email.strip()

    return {
        "success":True,
        "data":(email,password)
    }

def get_user_id_and_password_hash (email):
    try:
        connection = connect_db()
        if not connection:
            return "DB ERROR"
    
        cursor = connection.cursor()
    
        cursor.execute("""SELECT password_hash,user_id FROM users WHERE email = %s""",
                       [email])
    
        cursor_result=cursor.fetchone()

        if not cursor_result or len(cursor_result) != 2:
            return False
    
        password_hash,user_id = cursor_result
        return [password_hash, str(user_id)]
    finally:
        cursor.close()
        connection.close()

    
