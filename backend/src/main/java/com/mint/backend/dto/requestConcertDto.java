package com.mint.backend.dto;

import java.io.File;
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
public class requestConcertDto {

    private String title;
    private boolean status;
    private String date;
    private File descriptionsImage;
    private File postImage;
    private File sectionImage;
    private int time;
    private String place;
    private String contract_address;
    private String price;
    private Map<String,Integer> section;

}
