package com.mint.backend.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;


import javax.persistence.Id;




@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Builder
public class UriData {
    @Id
    private Long tokenUri;
    private String title;
    private String place;
    private String date;
    private String time;
    private String area;
    private String seat;
    private String price;
    private String artists;
    private String img;

}
