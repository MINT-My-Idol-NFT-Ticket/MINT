create table artist
(
    artist_id  bigint auto_increment
        primary key,
    name       varchar(255) not null,
    concert_id bigint       null,
    constraint FKeltymty0s1u1l7k8rfhr2p9my
        foreign key (concert_id) references concert (concert_id)
);
