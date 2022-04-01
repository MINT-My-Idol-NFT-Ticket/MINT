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
    private List<Times> times;
    private List<Artist> artist;

    public List<ResponseFindAllDto> toDTO(List<Concert> concert) {
        List<ResponseFindAllDto> list = new ArrayList<>();
        for (Concert c : concert) {
            list.add(ResponseFindAllDto.builder()
                    .id(c.getId())
                    .title(c.getTitle())
                    .thumnail(c.getImage().getThumbnailUrl())
                    .times(c.getTimes())
                    .artist(c.getArtist())
                    .build());
        }
        return list;
    }

}
