USE nodedb

CREATE TABLE IF NOT EXISTS people (
    id integer not null auto_increment,
    name varchar(255),
    primary key(id)
);
