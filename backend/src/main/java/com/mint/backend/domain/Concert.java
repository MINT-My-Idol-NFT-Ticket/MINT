package com.mint.backend.domain;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
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
    @Column(name="concert_id")
    private Long id;
    @NotNull
    private String title;
    @NotNull
    private String place;
    @NotNull
    private String contractAddress;
    @NotNull
    private String saleContractAddress;
    private String price;
    @Column(columnDefinition = "Integer default 0")
    private int status;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="concert_id")
    private Image image;

    @OneToMany(mappedBy = "concert")
    private List<Times> times= new ArrayList<>();

    @OneToMany(mappedBy = "concert",cascade = CascadeType.ALL)
    private List<Artist> artist = new ArrayList<>();







}
