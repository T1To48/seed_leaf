cart_items_table = """
CREATE TABLE cart_items (
    user_id CHAR(36),
    product_id  CHAR(36),
    quantity SMALLINT NOT NULL,
    PRIMARY KEY (user_id,product_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products(product_id) ON DELETE CASCADE
);

"""
# card total price, must be calculated in frontend,
# in order to have the latest price , and avoid conflict between current and prev product price

# to retrieve all cart items, for a user, we use (WHERE user_id = <the_user_id>)
