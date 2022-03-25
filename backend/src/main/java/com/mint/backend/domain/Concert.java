package com.mint.backend.domain;


import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

/**
 * @packageName : com.mint.backend.dto
 * @fileName : Concert
 * @date : 2022-03-23
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
public class Concert {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="conert_id")
    private Long id;
    private String title;
    private String place;
    private String contract_address;
    private String price;
    private String status;

}
