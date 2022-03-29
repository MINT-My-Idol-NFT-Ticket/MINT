package com.mint.backend.service;

import com.mint.backend.domain.*;
import com.mint.backend.dto.requestConcertDto;
import com.mint.backend.repository.ArtistRepository;
import com.mint.backend.repository.ConcertRepository;
import com.mint.backend.repository.ImageRepository;
import com.mint.backend.repository.SectionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;

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

    private final ConcertRepository concertRepository;
    private final ImageRepository imageRepository;
    private final ArtistRepository artistRepository;
    private final SectionRepository sectionRepository;


    //콘서트 목록 조회
    @Transactional
    public List<Concert> getConcertList() {
        //to do
        List lsit = new ArrayList();
        return lsit;
    }

    //콘서트 상세정보
    public Concert getConcertDetail() {
        //to do
        return new Concert();
    }

    //콘서트 검색
    public Concert search() {
        //to do
        return new Concert();
    }

    //콘서트 등록
    public boolean create(requestConcertDto requestConcertDto) throws IOException {
        //기본경로
        String path = "backend/src/main/resources/image" + requestConcertDto.getTitle();
        String postPath = path + File.separator + requestConcertDto.getPostImage().getOriginalFilename();
        String sectionPath = path + File.separator + requestConcertDto.getSectionImage().getOriginalFilename();
        String DescriptionPath = path + File.separator + requestConcertDto.getDescriptionsImage().getOriginalFilename();

        //이미지 저장
        requestConcertDto.getPostImage().transferTo(new File(postPath));
        requestConcertDto.getSectionImage().transferTo(new File(sectionPath));
        requestConcertDto.getDescriptionsImage().transferTo(new File(DescriptionPath));
        Image image = Image.builder()
                .coming_url(sectionPath)
                .description_url(DescriptionPath)
                .main_url(postPath)
                .build();
        //시간등록
        List<Times> timesList = new ArrayList<>();
        int turn = requestConcertDto.getTime();
        for (int i = 0; i < turn; i++) {

            //섹션등록
            Map<String, Integer> map = requestConcertDto.getSection();
            List<Section> list = new ArrayList<>();
            for (String s : map.keySet()) {
                //자리등록
                List<Seat> seatList = new ArrayList<>();
                for (int j = 0; j < map.get(s); j++) {
                    Seat seat = Seat.builder()
                            .name(Integer.toString(j))
                            .build();

                    seatList.add(seat);
                }
                Section section = Section.builder()
                        .name(s)
                        .seats(seatList)
                        .build();

                list.add(section);
            }
            Times time = Times.builder()
                    .date(requestConcertDto.getTimeTable()[i])
                    .sections(list)
                    .build();

            timesList.add(time);
        }
        //가수등록
        String[] str = requestConcertDto.getSinger();
        List<Artist> artists = new ArrayList<>();
        for (int i = 0; i < str.length; i++) {
            artists.add(Artist.builder()
                    .name(str[i])
                    .build());
        }
        //콘서트등록
        Concert concert = Concert.builder()
                .title(requestConcertDto.getTitle())
                .place(requestConcertDto.getPlace())
                .contract_address(requestConcertDto.getContract_address())
                .price(requestConcertDto.getPrice())
                .status(requestConcertDto.isStatus())
                .image(image)
                .times(timesList)
                .artists(artists)
                .build();

        try{
            concertRepository.save(concert);
        }catch (Exception e){
            return false;
        }
        return true;
    }

    //콘서트 수정
    public Concert update() {
        //to do
        return new Concert();
    }

    //콘서트 삭제
    public boolean delete(Long ConcertId) {
        try {
            concertRepository.deleteById(ConcertId);
        }catch (Exception e){
            return false;
        }
        return true;
    }
}
