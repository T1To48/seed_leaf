from flask import Blueprint
from services import auth_bp,user_account_bp,user_bp,orders_bp,products_bp
api_bp = Blueprint('api',__name__,url_prefix="/api/v1")

api_bp.register_blueprint(auth_bp,url_prefix="/auth")

api_bp.register_blueprint(user_bp,url_prefix="/user")
user_bp.register_blueprint(user_account_bp,url_prefix = "/account")
user_bp.register_blueprint(orders_bp,url_prefix="/orders")

api_bp.register_blueprint(products_bp,url_prefix="/products")

