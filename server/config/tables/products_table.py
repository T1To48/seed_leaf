products_table = """
CREATE TABLE products (
product_id CHAR(36),
product_category ENUM('microgreens', 'herbs', 'oils') NOT NULL,
product_name VARCHAR(100) NOT NULL,
product_price DECIMAL(10, 2) NOT NULL,
product_description TEXT NOT NULL,
product_img TINYTEXT NOT NULL,
PRIMARY KEY(product_id),
UNIQUE (product_name),
UNIQUE (product_img(50))
);
"""
