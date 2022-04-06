package com.mint.backend.dto;

import com.mint.backend.domain.UriData;

import java.util.Map;

public class RequestUriDataDto {

    private String title;
    private String place;
    private String date;
    private String time;
    private String area;
    private String seat;
    private String price;
    private String artists;
    private String img;

    public UriData toEntity() {
        return UriData.builder()
                .title(title)
                .place(place)
                .date(date)
                .time(time)
                .area(area)
                .seat(seat)
                .price(price)
                .artists(artists)
                .img(img)
                .build();
    }
}
