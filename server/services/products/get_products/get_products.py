import os
import math

from flask import Blueprint, request, send_file
from flask_jwt_extended import jwt_required

from config import connect_db
from utils import (
    quick_response,
    get_from_database,
    get_products_price_range,
    count_products_database,
)


products_bp = Blueprint("products", __name__)


@products_bp.route("/product-details/<string:product_id>")
def get_product_by_id(product_id):

    exec_statement = """ SELECT * FROM products WHERE product_id = %s """
    product_details = get_from_database(exec_statement, [product_id], True)

    if not product_details:
        return quick_response("Product not found", False, 400)
    elif product_details == "DB_ERROR":
        return quick_response("an error occured, please try again", False, 500)

    product_details.pop("product_img", None)
    return quick_response(product_details)


@products_bp.route("/product-img/<string:product_id>.jpg")
def get_product_img(product_id):
    exec_statement = (
        """ SELECT product_category,product_img FROM products WHERE product_id = %s """
    )

    product_details = get_from_database(exec_statement, [product_id], True)

    if not product_details:
        return quick_response("Product not found", False, 400)
    elif product_details == "DB_ERROR":
        return quick_response("an error occured, please try again", False, 500)
    
    product_img = product_details.get("product_img")
    product_category = product_details.get("product_category")

    path = os.path.abspath(
        f"static/products_images/{product_category}/{product_img}.jpg"
    )
    return send_file(path)


@products_bp.route("/list")
def get_products_list():
    query_strings = request.args

    category = query_strings.get("category", "all").lower()

    allowed_categories = {"microgreens", "herbs", "oils", "all"}

    if category not in allowed_categories:
        return quick_response("Invalid category", False, 400)
    
    allowed_min_price, allowed_max_price = get_products_price_range(category)

    min_price = query_strings.get("min_price", allowed_min_price)
    max_price = query_strings.get("max_price", allowed_max_price)

    sortby_column = query_strings.get("sortby_column", "product_name").lower()
    sortby_direction = query_strings.get("sortby_direction", "ASC").upper()
    current_page = query_strings.get("page", 1)

    # filtering options
    allowed_columns = {"product_name", "product_price"}
    allowed_directions = {"ASC", "DESC"}

    if (
        sortby_column not in allowed_columns
        or sortby_direction not in allowed_directions
    ):
        return quick_response("Invalid sorting column / direction", False, 400)

    try:

        min_price = float(min_price)
        max_price = float(max_price)

        if not min_price or min_price < allowed_min_price:
            min_price = allowed_min_price
        if not max_price or max_price > allowed_max_price:
            max_price = allowed_max_price


        if min_price <= 0 or max_price <= 0:
            raise ValueError
    except (ValueError, TypeError):

        return quick_response("Invalid products price range", False, 400)
    products_count = count_products_database(category, min_price, max_price)
    products_limit_per_page = 5
    total_pages = math.ceil(products_count / products_limit_per_page)

    try:
        current_page = int(current_page)
        if current_page <= 0 or current_page > total_pages:
            raise ValueError
    except (ValueError, TypeError):
        return quick_response("Invalid page number", False, 400)

    offset = (current_page - 1) * products_limit_per_page

    exec_statement = (
        """ SELECT  * FROM products WHERE product_category = %s AND product_price BETWEEN %s AND %s ORDER BY """
        + f"{sortby_column} {sortby_direction}"
        + """ LIMIT %s, %s"""
    )

    data_list = [category, min_price, max_price, offset, products_limit_per_page]

    if category == "all":
        data_list = data_list[1:]
        exec_statement = (
            """ SELECT  * FROM products WHERE product_price BETWEEN %s AND %s ORDER BY """ + f"{sortby_column} {sortby_direction}" + """ LIMIT %s, %s"""
        )

    current_page_products_list = get_from_database(exec_statement, data_list)

    if not current_page_products_list:
        return quick_response("No products where found", False, 400)
    elif current_page_products_list == "DB_ERROR":
        return quick_response("an error occured, please try again", False, 500)

    response = {
        "current_page": current_page,
        "total_pages": total_pages,
        "allowed_price_range": [allowed_min_price, allowed_max_price],
        "current_price_range": [min_price, max_price],
        "products_list": current_page_products_list,
    }
    # if user price range valid(in the range that allowd) use it to count
    # else use default allowed range

    # sorting options

    return quick_response(response)

    # try:
    #     current_page = int(current_page)
    #     if current_page<=0 or current_page>total_pages:
    #         raise ValueError
    # except (ValueError,TypeError):
    #     return quick_response("Invalid page number",False,400)
