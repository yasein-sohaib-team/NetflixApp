DROP TABLE IF EXISTS movie;

CREATE TABLE IF NOT EXISTS movie (
    id SERIAL PRIMARY KEY,
    title varchar(255),
    time varchar(255),
    summary varchar(255),
    image varchar(255)
);