package com.mint.backend.dto;

import com.mint.backend.domain.Concert;
import com.mint.backend.domain.Times;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

/**
 * @packageName : com.mint.backend.dto
 * @fileName : ResponseFindDayDTO
 * @date : 2022-04-02
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
public class ResponseFindDayDTO {
    private Long id;
    private String date;
    private String time;


}
