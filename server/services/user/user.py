from flask import Blueprint,request,jsonify
from flask_jwt_extended import (create_access_token,set_access_cookies,
                                create_refresh_token,set_refresh_cookies)

from config import connect_db
from utils import quick_response

user_bp = Blueprint("user",__name__)



