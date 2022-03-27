package com.mint.backend.service;

import com.mint.backend.domain.Concert;
import com.mint.backend.repository.ArtistRepository;
import com.mint.backend.repository.ImageRepository;
import com.mint.backend.repository.SectionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

/**
 * @packageName : com.mint.backend.service
 * @fileName : ConcertService
 * @date : 2022-03-25
 * @language : JAVA
 * @classification :
 * @time_limit : 2sec
 * @required_time : 00:40 ~ 01:22
 * @submissions : 1
 * @description :
 **/
@Service
@RequiredArgsConstructor
public class ConcertService {

    private final ConcertService concertService;
    private final ImageRepository imageRepository;
    private final ArtistRepository artistRepository;
    private final SectionRepository sectionRepository;


    //콘서트 목록 조회
    @Transactional
    public List<Concert> getConcertList(){
        //to do
        List lsit = new ArrayList();
        return lsit;
    }
    //콘서트 상세정보
    public Concert getConcertDetail(){
        //to do
        return new Concert();
    }

    //콘서트 검색
    public Concert search(){
        //to do
        return new Concert();
    }

    //콘서트 등록
    public Concert create(){
        //to do
        return new Concert();
    }

    //콘서트 수정
    public Concert update(){
        //to do
        return new Concert();
    }

    //콘서트 삭제
    public Concert delete(){
        //to do
        return new Concert();
    }
}
