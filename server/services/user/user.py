from flask import Blueprint,request,jsonify
from flask_jwt_extended import (create_access_token,set_access_cookies,
                                create_refresh_token,set_refresh_cookies,jwt_required,get_jwt,decode_token)
from  datetime import datetime,timedelta,timezone

from config import connect_db
from utils import quick_response

user_bp = Blueprint("user",__name__)

@user_bp.after_request
# @jwt_required()
def check_and_validate_jwtokens(response):
    access_token = request.cookies.get("acc_token")
    refresh_token = request.cookies.get("ref_token")

    access_token = decode_token(access_token,allow_expired=True)
    refresh_token = decode_token(refresh_token,allow_expired=True)

    user_id=access_token["sub"]

    access_token_exp_timestamp = access_token.get("exp")
    refresh_token_exp_timestamp = refresh_token.get("exp")
    

    current_timestamp = datetime.now(timezone.utc)
    tokens_renewal_windows={
        "access":timedelta(minutes=3),
        "refresh":timedelta(hours=2)
    }

    access_token_target_timestamp = datetime.timestamp(current_timestamp + tokens_renewal_windows["access"])
    refresh_token_target_timestamp = datetime.timestamp(current_timestamp + tokens_renewal_windows["refresh"])
    if access_token_exp_timestamp < access_token_target_timestamp:
            new_access_token = create_access_token(identity=user_id)
            print("🐳"*15)
            print(response)
            print("🐳"*15)
            set_access_cookies(response,new_access_token)
            return response
    
    if refresh_token_exp_timestamp <refresh_token_target_timestamp:
          new_refresh_token = create_refresh_token(identity=user_id)
          set_refresh_cookies(response,new_refresh_token)
          
    # print("🐙"*15)
    # print("access_token_expiry =>",access_token_exp_timestamp)
    # print("refresh_token_expiry =>", datetime.fromtimestamp(refresh_token_exp_timestamp))
    # print("target timestamp",access_token_target_timestamp)
    # print("🐙"*15)
    # print("IN 3 minutes =>", int(datetime.timestamp(current_timestamp + tokens_renewal_windows["access"])))
    # print("expiry =>", datetime.fromtimestamp(1737241771))

    data = response.get_json()
    # print(response.get_json())
    # data["data"] = "no refresh token log out"
    return response

    # print("access_token=>",access_token)
    # print("refresh_token =>",refresh_token)



