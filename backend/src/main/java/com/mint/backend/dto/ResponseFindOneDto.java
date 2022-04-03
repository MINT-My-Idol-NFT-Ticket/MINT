package com.mint.backend.dto;

import com.mint.backend.domain.Artist;
import com.mint.backend.domain.Cids;
import com.mint.backend.domain.Concert;
import lombok.*;

import java.util.List;

/**
 * @packageName : com.mint.backend.dto
 * @fileName : responseFindOneDto
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
@Getter
public class ResponseFindOneDto {
    private Long id;
    private String title;
    private List<Cids> cids;
    private String place;
    private String contractAddress;
    private String price;
    private List<Artist> artists;
    private int status;
    private String poster;
    private String detail;
    private String section;
    private String thumbnail;

    public ResponseFindOneDto toDTO(Concert concert){
        return ResponseFindOneDto.builder()
                .poster(concert.getImage().getPosterUrl())
                .detail(concert.getImage().getDescriptionUrl())
                .section(concert.getImage().getSectionUrl())
                .thumbnail(concert.getImage().getThumbnailUrl())
                .id(concert.getId())
                .cids(concert.getCids())
                .title(concert.getTitle())
                .place(concert.getPlace())
                .contractAddress(concert.getContractAddress())
                .price(concert.getPrice())
                .artists(concert.getArtist())
                .status(concert.getStatus())
                .build();
    }
}
