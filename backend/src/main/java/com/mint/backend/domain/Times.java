package com.mint.backend.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

/**
 * @packageName : com.mint.backend.dto
 * @fileName : Times
 * @date : 2022-03-24
 * @language : JAVA
 * @classification :
 * @time_limit : 2sec
 * @required_time : 00:40 ~ 01:22
 * @submissions : 1
 * @description :
 **/
@Getter
@NoArgsConstructor
@Entity
public class Times {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="times_id")
    private Long id;
    private String date;


}
