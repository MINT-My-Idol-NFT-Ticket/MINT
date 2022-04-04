create table image
(
    image_id            bigint auto_increment
        primary key,
    concert_description varchar(255) null,
    concert_poster      varchar(255) null,
    concert_section     varchar(255) null,
    concert_thumbnail   varchar(255) null
);
