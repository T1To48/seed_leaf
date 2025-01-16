users_table = """
CREATE TABLE users (
user_id CHAR(36),
name VARCHAR(100)  NOT NULL,
email VARCHAR(255) NOT NULL,
password_hash TEXT NOT NULL,
address VARCHAR(255) NOT NULL,
PRIMARY KEY(user_id),
UNIQUE (email)
);
"""
