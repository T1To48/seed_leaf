from flask import Blueprint, request

from flask_jwt_extended import jwt_required, get_jwt_identity
from config import connect_db
from utils import (quick_response,
                    get_from_database, update_row_database,
                    is_email_valid,is_info_valid)

user_account_bp = Blueprint("user_account", __name__)


@user_account_bp.route("/details")
@jwt_required()
def get_user_account_details():
    user_id = [get_jwt_identity()]
    exec_statement = """SELECT name, email, address FROM users WHERE user_id = %s """
    account_details = get_from_database(exec_statement, user_id, True)
    if not account_details:
        return quick_response("User not found", False)
    elif account_details == "DB_ERROR":
        return quick_response("an error occured, please try again", False, 500)
    return quick_response(account_details)


@user_account_bp.route("/update", methods=["PUT"])
@jwt_required()
def update_user_account_details():

    if not request.is_json:
        return quick_response("Invalid request body object", False, 400)

    user_id = get_jwt_identity()

    # allowed_column_names = {"name", "email", "address"}
    exec_statement = """UPDATE users SET"""
    data_list = list()

    new_details = request.get_json()

    if not new_details:
        return quick_response("Invalid request body object", False, 400)

    email = new_details.get("email")
    name = new_details.get("name")
    address = new_details.get("address")
    
    new_details_counter = 0
    if email:
        if not is_email_valid(email):
            return quick_response("Invalid Email Address",False,400)
        email = email.strip()
        exec_statement += """ email = %s,"""
        data_list.append(email)
        new_details_counter +=1
    if name:
        if not is_info_valid(name,3):
            return quick_response("Invalid Name",False,400)
        name = name.strip()
        exec_statement += """ name = %s,"""
        data_list.append(name)
        new_details_counter +=1

    if address:
        if not is_info_valid(address,5):
            return quick_response("Invalid Address",False,400)
        address = address.strip()
        exec_statement += """ address = %s,"""
        data_list.append(address)
        new_details_counter +=1

    if new_details_counter <1:
        return quick_response("Invalid request body object", False, 400)
    

    exec_statement = exec_statement[:-1]
    exec_statement += """ WHERE user_id = %s"""
    data_list.append(user_id)

    db_account_update = update_row_database(exec_statement, data_list)

    if not db_account_update:
        return quick_response("Failed updating account details", False, 400)
    elif db_account_update == "DB_ERROR":
        return quick_response("an error occured, please try again", False, 500)
    elif db_account_update == "IntegrityError":
        return quick_response("Email already in use",False,409)
    
    return quick_response("Successfully Updated")
