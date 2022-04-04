create table seat
(
    id         bigint auto_increment
        primary key,
    date       datetime(6)   null,
    name       varchar(255)  null,
    status     int default 0 null,
    section_id bigint        null,
    constraint FKhxi4f44gv7s6u5a90ehw1g0x3
        foreign key (section_id) references section (section_id)
);
