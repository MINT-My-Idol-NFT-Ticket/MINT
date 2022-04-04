create table concert
(
    concert_id            bigint auto_increment
        primary key,
    contract_address      varchar(255)  not null,
    place                 varchar(255)  not null,
    price                 varchar(255)  null,
    sale_contract_address varchar(255)  not null,
    status                int default 0 null,
    title                 varchar(255)  not null
);

