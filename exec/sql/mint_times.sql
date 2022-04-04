create table times
(
    times_id   bigint auto_increment
        primary key,
    date       varchar(255) null,
    concert_id bigint       null,
    constraint FKqkhr7kx4y609s5sovnc2qfm95
        foreign key (concert_id) references concert (concert_id)
);

