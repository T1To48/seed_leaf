from flask import Blueprint,request,jsonify
from flask_jwt_extended import (create_access_token,set_access_cookies,
                                create_refresh_token,set_refresh_cookies,jwt_required,get_jwt,decode_token,verify_jwt_in_request,unset_jwt_cookies)
from jwt.exceptions import ExpiredSignatureError ,DecodeError
from  datetime import datetime,timedelta,timezone
from config import connect_db
from utils import quick_response

user_bp = Blueprint("user",__name__)

@user_bp.after_request
def check_and_validate_jwtokens(response):

    # ENCODED TOKENS, from request cookies
    access_token = request.cookies.get("acc_token")
    refresh_token = request.cookies.get("ref_token")
    
    # 1. we check if refresh and access tokens exist or not
    # 2. if any doesnt exist we return False and delete all user cookies (LOGOUT)
    if not access_token or not refresh_token:
          res =  jsonify({
                "success":False,
                "data":"Invalid tokens, Logout"
          })
          res.status_code=401

          unset_jwt_cookies(res)
          return res

    # 2. we check if tokens are valid 
    try:
        # DECODED TOKENS
        access_token = decode_token(access_token,allow_expired=True)
        refresh_token = decode_token(refresh_token,allow_expired=False)

    # if refresh token is expired return False and delete all user cookies (LOGOUT)
    except ExpiredSignatureError:
        res =  jsonify({
                "success":False,
                "data":"Expired Refresh Token, Logout"
        })
        res.status_code=401
        unset_jwt_cookies(res)
        return res
    
    # if any token is invalid or produce an error when docoded
    # return False and delete all user cookies (LOGOUT)
    except Exception as TokenError:
        res =  jsonify({
                "success":False,
                "data":"Invalid tokens, Logout"
          })
        res.status_code=401
        unset_jwt_cookies(res)
        return res
    
    
    #` at this point REFRESH TOKEN is 100% valid 
    #` at this point ACCESS TOKEN is valid #!BUT maybe expired 

    user_id=refresh_token["sub"]


    exp_timestamp_access_token = access_token.get("exp")
    exp_timestamp_refresh_token = refresh_token.get("exp")


    renewal_window_access_token = timedelta(minutes=3)
    renewal_window_refresh_token = timedelta(hours=2)
   
    current_timestamp = datetime.now(timezone.utc)
    access_token_target_timestamp = datetime.timestamp(current_timestamp + renewal_window_access_token)
    refresh_token_target_timestamp = datetime.timestamp(current_timestamp + renewal_window_refresh_token)


    # 2. we check if refresh or access token is near expiration and renew it 

    # 3.if access token is expired or near expiry we renew it with refresh token 
    if exp_timestamp_access_token < access_token_target_timestamp:
        new_access_token = create_access_token(identity=user_id,expires_delta=None)
        print("🐳"*9)
        print("ACCESS token renew happend")
        print("🐳"*9)
        set_access_cookies(response,new_access_token)
    
    # 5.if refresh token near expiry renew it 
    # ! if expired or invalid function will return False in the __try exept__ block above  
    if exp_timestamp_refresh_token <refresh_token_target_timestamp:
        new_refresh_token = create_refresh_token(identity=user_id,expires_delta=None)
        print("🐙"*9)
        print("REFRESH token renew happend")
        print("🐙"*9)
        set_refresh_cookies(response,new_refresh_token)
    return response
    



