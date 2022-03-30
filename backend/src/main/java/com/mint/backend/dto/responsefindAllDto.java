package com.mint.backend.dto;

import com.mint.backend.domain.Artist;
import com.mint.backend.domain.Times;
import lombok.AllArgsConstructor;
import lombok.Builder;

import javax.xml.crypto.Data;
import java.util.List;

/**
 * @packageName : com.mint.backend.dto
 * @fileName : responsefindAllDto
 * @date : 2022-03-29
 * @language : JAVA
 * @classification :
 * @time_limit : 2sec
 * @required_time : 00:40 ~ 01:22
 * @submissions : 1
 * @description :
 **/
@AllArgsConstructor
@Builder
public class responsefindAllDto {
    private String title;
    private String thumnail;
    private List<Times> times;
    private List<Artist> artist;

}
