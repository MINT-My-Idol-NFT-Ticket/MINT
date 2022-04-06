package com.mint.backend.dto;

import com.mint.backend.domain.UriData;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class ResponseUriDataDto {
    private String title;
    private String place;
    private String date;
    private String time;
    private String area;
    private String seat;
    private String price;
    private String artists;
    private String img;

    public ResponseUriDataDto(UriData uriData) {
        this.title = uriData.getTitle();
        this.place = uriData.getPlace();
        this.date = uriData.getDate();
        this.time = uriData.getTime();
        this.area = uriData.getArea();
        this.seat = uriData.getSeat();
        this.price = uriData.getPrice();
        this.artists = uriData.getArtists();
        this.img = uriData.getImg();
    }
}
