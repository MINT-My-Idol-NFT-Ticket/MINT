package com.mint.backend.dto;

import com.mint.backend.domain.Concert;
import lombok.Getter;
import org.springframework.web.multipart.MultipartFile;

import java.util.Map;

/**
 * @packageName : com.mint.backend.dto
 * @fileName : requestCreateConcertDto
 * @date : 2022-03-25
 * @language : JAVA
 * @classification :
 * @time_limit : 2sec
 * @required_time : 00:40 ~ 01:22
 * @submissions : 1
 * @description :
 **/
@Getter
public class requestConcertDto {

    private String title;
    private boolean status;
    private String date;
    private String[] singer;
    private MultipartFile descriptionsImage;
    private MultipartFile postImage;
    private MultipartFile sectionImage;
    private int time;
    private String[] timeTable;
    private String place;
    private String contract_address;
    private String price;
    private Map<String,Integer> section;

    public Concert toEntity(){
        Concert concert = Concert.builder()
                .title(this.title)
                .place(this.place)
                .contract_address(this.contract_address)
                .price(this.price)
                .status(this.status)
                .build();

        return concert;
    }

}
