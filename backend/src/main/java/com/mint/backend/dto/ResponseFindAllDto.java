package com.mint.backend.dto;

import com.mint.backend.domain.Artist;
import com.mint.backend.domain.Concert;
import com.mint.backend.domain.Times;
import lombok.*;


import java.util.ArrayList;
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
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Getter
public class ResponseFindAllDto {
    private Long id;
    private String title;
    private String thumnail;
    private String poster;
    private String startDate;
    private String endDate;
    private List<Artist> artist;

//    public static ResponseFindAllDto from(Concert concert){
//        return ResponseFindAllDto.builder()
//                .id(concert.getId())
//                .title(concert.getTitle())
//                .thumnail(concert.getImage().getThumbnailUrl())
//                .poster(concert.getImage().getThumbnailUrl())
//                .startDate(concert.getTimes().get(0).getDate())
//                .endDate(concert.getTimes().get(concert.getTimes().size()-1).getDate())
//                .artist(concert.getArtist())
//                .build();
//    }

}
