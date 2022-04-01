package com.mint.backend.dto;

import com.mint.backend.domain.Concert;
import lombok.Getter;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.constraints.NotNull;
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
public class RequestConcertDto {
    @NotNull
    private String title;
    private int status;
    @NotNull
    private String[] singer;
    private int sectionNum;
    private int time;
    private String[] timeTable;
    private String place;
    private String contractAddress;
    private String saleContractAddress;
    private String price;
    private Map<String,Integer> section;

}
