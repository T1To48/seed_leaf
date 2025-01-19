import os
from dotenv import load_dotenv
from flask import Flask,send_file
from datetime import timedelta

from flask_jwt_extended import (JWTManager,create_access_token,create_refresh_token,
                                set_access_cookies,set_refresh_cookies)

from routes import api_bp
from config import connect_db
from services import populate_products_list


load_dotenv()

app = Flask(__name__)
app.url_map.strict_slashes=False
app.config["JWT_SECRET_KEY"]=os.getenv("JWT_SECRET_KEY")
app.config["JWT_ENCODE_ISSUER"] =os.getenv("JWT_ISSUER")
app.config["JWT_DECODE_ISSUER"] = os.getenv("JWT_ISSUER")
app.config["JWT_SESSION_COOKIE"] = False
app.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(minutes=15)
app.config["JWT_REFRESH_TOKEN_EXPIRES"] = timedelta(days=7)
app.config["JWT_ALGORITHM"] = "HS256"
app.config["JWT_TOKEN_LOCATION"] = "cookies"
app.config["JWT_ACCESS_COOKIE_NAME"] ="acc_token"
app.config["JWT_REFRESH_COOKIE_NAME"] ="ref_token"
# app.config["JWT_ACCESS_COOKIE_PATH"] ="/api/v1/user"
# app.config["JWT_REFRESH_COOKIE_PATH"] ="/api/v1/user"
app.config["JWT_COOKIE_SAMESITE"] ="Strict"
# app.config["JWT_COOKIE_SECURE"] =True
app.config["JWT_COOKIE_CSRF_PROTECT"] = False

jwt = JWTManager(app)

app.register_blueprint(api_bp)

# populate_products_list(connect_db())

@app.route('/')
def home():

    return send_file("./static/products_imgs/microgreens/Vaso_Micro_Ervilha.webp",max_age=10000)

print(app.url_map)
if not connect_db():
    raise Exception("Unable to connect to the Database")


if __name__ == "__main__":
    app.run()
