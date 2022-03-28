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
    @Column(name="conert_id")
    private Long id;
    @NotNull
    private String title;
    @NotNull
    private String place;
    @NotNull
    private String contract_address;
    private String price;
    @Column(columnDefinition = "integer default 0")
    private boolean status;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="image_id")
    private Image image;
    @OneToMany(cascade = CascadeType.ALL)
    private List<Times> times;
    @OneToMany(cascade = CascadeType.ALL)
    private List<Artist> artists;

    public void addImage(Image image){
        this.image=image;
    }

    public void addArtist(List<Artist> artist){
        this.artists = artist;
    }

    public void addtimes(List<Times> times){
        this.times = times;
    }



}
