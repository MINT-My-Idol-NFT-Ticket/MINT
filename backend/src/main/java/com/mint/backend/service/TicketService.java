package com.mint.backend.service;


import com.mint.backend.domain.Seat;
import com.mint.backend.domain.Section;
import com.mint.backend.domain.Times;
import com.mint.backend.dto.responseExistSeatDto;
import com.mint.backend.repository.SeatRepository;
import com.mint.backend.repository.SectionRepository;
import com.mint.backend.repository.TimesRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;


import java.util.List;

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
    public List<Times> getTimes(Long concertId){
        return timesRepository.findAllByConcert_Id(concertId);
    }

    //구역 조회
    public List<Section> getSection(Long timesId){
        return sectionRepository.findAllByTimesId(timesId);

    }
    //좌석 조회
    public List<Seat> getSeat(Long sectionId){
        return seatRepository.findAllBySectionId(sectionId);
    }
    //예매가능여부
    public responseExistSeatDto getSeatStatus(Long seatId){
        Seat seat = seatRepository.findById(seatId).orElse(Seat.builder().status(0).build());
        return new responseExistSeatDto(seat.getStatus());
    }
    //좌석 상태변경
}
