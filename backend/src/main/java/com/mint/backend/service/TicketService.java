package com.mint.backend.service;

import com.mint.backend.domain.Concert;
import com.mint.backend.repository.SeatRepository;
import com.mint.backend.repository.SectionRepository;
import com.mint.backend.repository.TimesRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import sun.security.krb5.internal.Ticket;

/**
 * @packageName : com.mint.backend.service
 * @fileName : TicketService
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
public class TicketService {

    private final ConcertService concertService;
    private final SectionRepository sectionRepository;
    private final SeatRepository seatRepository;
    private final TimesRepository timesRepository;

    //회차 조회
    public void getTimes(){
        //to do

    }

    //구역 조회
    public void getSection(){
        //to do

    }
    //날짜 조회
    public void getday(){
        //to do

    }
}
