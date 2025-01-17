from flask import Blueprint,request,jsonify

from mysql.connector import IntegrityError
from werkzeug.security import check_password_hash
from flask_jwt_extended import (create_access_token,set_access_cookies,
                                create_refresh_token,set_refresh_cookies)

from config import connect_db
from utils import (quick_response,is_email_valid,
                   is_password_valid,is_info_valid,
                   hash_password)

from .register import validate_user_registeration
from .login import validate_user_login,get_user_id_and_password_hash
auth_bp = Blueprint('auth',__name__)

@auth_bp.route("/register",methods=["POST"])
def register():
    validated_user = validate_user_registeration(request)
    if not validated_user["success"]:
        message=validated_user["message"]
        return quick_response(message,False,400)

    try:
        connection = connect_db()
        if connection:
            cursor = connection.cursor()
            cursor.execute("""
                           INSERT INTO users
                           VALUES (%s,%s,%s,%s,%s);
                           """,validated_user["data"])
            if cursor.rowcount !=1:
                return quick_response("failed to register user",False,400)
            connection.commit()
            return quick_response("Successfully registered")
        
    except IntegrityError:
        if connection.is_connected():
            connection.rollback()
        return quick_response("Email already in use",False,409)
    
    finally:
        if connection and connection.is_connected():
            cursor.close()
            connection.close()

    return quick_response("an error occured, please try again",False,500)


@auth_bp.route("/login",methods=["POST"])
def login():
    
    validated_user = validate_user_login(request)
    if not validated_user["success"]:
        message=validated_user["message"]
        return  quick_response(message,False,400)
    
    email, password = validated_user["data"]

    db_user_info = get_user_id_and_password_hash(email)

    if not db_user_info:
        return quick_response("Email address, not found",False,404)
    
    # if connecting to DB fails:
    elif db_user_info == "DB ERROR":
        return quick_response("An error occured, please try again",False,500)
    
    password_hash, user_id = db_user_info
    check_login_password = check_password_hash(password_hash,password)
    if not check_login_password:
        return quick_response("Incorrect password",False,401)
    elif  check_login_password:
        response = jsonify({
            "success":True,
            "data":"Logged in successfully"
                })
        access_token = create_access_token(identity=user_id)
        refresh_token = create_refresh_token(identity=user_id)
        set_access_cookies(response,access_token)
        set_refresh_cookies(response,refresh_token)
        return response,200

