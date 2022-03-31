package com.mint.backend.dto;

import com.mint.backend.domain.Artist;
import com.mint.backend.domain.Concert;
import com.mint.backend.domain.Times;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

/**
 * @packageName : com.mint.backend.dto
 * @fileName : responseSearchDto
 * @date : 2022-03-30
 * @language : JAVA
 * @classification :
 * @time_limit : 2sec
 * @required_time : 00:40 ~ 01:22
 * @submissions : 1
 * @description :
 **/
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ResponseSearchDto {
    private String title;
    private String comingUrl;
    private List<Times> date;
    private List<Artist> artists;

    public List<ResponseSearchDto> toDto(List<Concert> concert){
        List<ResponseSearchDto> list = new ArrayList<>();
        for (Concert con : concert) {
            list.add(ResponseSearchDto.builder()
                    .title(con.getTitle())
                    .comingUrl(con.getImage().getThumbnailUrl())
                    .date(con.getTimes())
                    .artists(con.getArtist())
                    .build());
        }
        return list;
    }
}
