order_products_table = """
CREATE TABLE order_products_junction(
order_id CHAR(36),
product_id CHAR(36),
quantity SMALLINT NOT NULL,
purchase_price DECIMAL(10, 2) NOT NULL,
PRIMARY KEY (order_id,product_id),
FOREIGN KEY (order_id) REFERENCES orders(order_id),
FOREIGN KEY (product_id) REFERENCES products(product_id)
);
"""
