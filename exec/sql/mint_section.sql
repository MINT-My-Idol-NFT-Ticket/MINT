create table section
(
    section_id bigint auto_increment
        primary key,
    name       varchar(255) null,
    times_id   bigint       null,
    constraint FKtj96wiyhoyrq92snj907spvl5
        foreign key (times_id) references times (times_id)
);
