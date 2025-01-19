orders_table = """
CREATE TABLE orders(
order_id CHAR(36),
user_id CHAR(36),
order_price DECIMAL(10, 2) NOT NULL,
date_time DATETIME  NOT NULL DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (order_id),
FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE SET NULL
);
"""
