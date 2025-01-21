order_products_table = """
CREATE TABLE order_products_junction(
order_id CHAR(36),
product_id CHAR(36),
quantity SMALLINT NOT NULL,
purchase_price DECIMAL(10, 2) NOT NULL,
total_purchae_price DECIMAL(10, 2) AS (purchase_price * quantity),
PRIMARY KEY (order_id,product_id),
FOREIGN KEY (order_id) REFERENCES orders(order_id),
FOREIGN KEY (product_id) REFERENCES products(product_id)
);
"""
