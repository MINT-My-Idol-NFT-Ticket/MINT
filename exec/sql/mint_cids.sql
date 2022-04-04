create table cids
(
    cids_id    bigint auto_increment
        primary key,
    cid        varchar(255) null,
    concert_id bigint       null,
    constraint FK7h1dnun65uui5c44tif3ceykf
        foreign key (concert_id) references concert (concert_id)
);
