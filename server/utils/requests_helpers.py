import re
import uuid

from flask import jsonify
from werkzeug.security import generate_password_hash

def quick_response(data,boolean=True,status_code=200):
    return jsonify({
            "success":boolean,
            "data":data
            
        }),status_code

def is_string(value):
    return isinstance(value,str)

def is_email_valid(email):
    if not is_string(email):
        return False
    email = email.strip()
    pattern = r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,7}\b'
    if not re.fullmatch(pattern,email):
        return False
    return True

def is_info_valid(info,min_length):
    if not is_string(info):
        return False
    info = info.strip()
    print(info)
    if len(info) < min_length:
        return False
    return True

def is_password_valid(password):
    pattern = r"^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[_@$.])(?=\S+$).{8,16}$"
    if not is_string(password) or not re.fullmatch(pattern,password):
        return False
    return True

def hash_password(password):
    password_hash = generate_password_hash(password,method = "scrypt",salt_length = 16)
    return password_hash

def remove_white_spaces(strings_array):
    for indx in range(len(strings_array)):
        strings_array[indx] = strings_array[indx].strip()
    return strings_array    

def generate_unique_ID():
    id = uuid.uuid4()
    return str(id)