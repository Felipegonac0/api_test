CREATE DATABASE IF NOT EXISTS videogameactDB;

USE videogameactDB;

CREATE TABLE Avatar (
    id INT(36) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    avatar VARCHAR(36) DEFAULT NULL,
    PRIMARY KEY (id)
);

INSERT INTO Avatar VALUES
    (1, 'Dragon', 'SpriteD'),
    (2, 'Magician', 'SpriteM'),
    (3, 'Princess', 'SpriteP'),
    (4, 'Knight', 'SpriteK');

CREATE TABLE Player (
    id INT(36) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    avatar INT(36) DEFAULT NULL,
    point INT(6) DEFAULT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (avatar) REFERENCES Avatar(id)
);

INSERT INTO Player VALUES
    (1, 'F3L1P3', 4, 4000),
    (2, 'VAL3R14', 3, 5000),
    (3, 'LU15', 2, 4300),
    (4, 'JU4N', 1, 3456);