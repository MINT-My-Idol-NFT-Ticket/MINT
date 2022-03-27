package com.mint.backend.domain;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

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
@AllArgsConstructor
@Builder
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

    @OneToOne
    @JoinColumn(name="image_id")
    private Image image;

    @OneToMany
    private List<Times> times = new ArrayList<>();

}
