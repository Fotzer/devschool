CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    username VARCHAR(20) NOT NULL UNIQUE,
    email VARCHAR(20) NOT NULL UNIQUE,
    first_name VARCHAR(20) NOT NULL,
    last_name VARCHAR(20) NOT NULL,
    password VARCHAR(20) NOT NULL
);

INSERT INTO users(username, email, first_name, last_name, password) VALUES
('Hoshion', 'hoshion@mail', 'Святослав', 'Шестеров', 'люблюшемса')
RETURNING *;
