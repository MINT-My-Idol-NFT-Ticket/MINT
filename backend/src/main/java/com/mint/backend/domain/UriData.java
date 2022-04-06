package com.mint.backend.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;


@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Builder
public class UriData {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long tokenUri;
    private String title;
    private String place;
    private String date;
    private String time;
    private String area;
    private String seat;
    private String artists;
    private String img;

}
