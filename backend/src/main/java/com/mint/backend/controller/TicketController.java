package com.mint.backend.controller;

import com.mint.backend.domain.Seat;
import com.mint.backend.domain.Section;
import com.mint.backend.domain.Times;
import com.mint.backend.dto.ResponseExistSeatDto;
import com.mint.backend.service.TicketService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * @packageName : com.mint.backend.controller
 * @fileName : Ticket
 * @date : 2022-03-24
 * @language : JAVA
 * @classification :
 * @time_limit : 2sec
 * @required_time : 00:40 ~ 01:22
 * @submissions : 1
 * @description :
 **/
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api/ticket")
@RequiredArgsConstructor
public class TicketController {

    private final TicketService ticketService;

    @GetMapping("/concert/{concertId}")
    public ResponseEntity<List<Times>> findDay(@PathVariable Long concertId){
        List<Times> list = ticketService.getTimes(concertId);
        return new ResponseEntity<List<Times>>(list, HttpStatus.OK);
    }

    @GetMapping("/times/{concertId}")
    public ResponseEntity<List<Section>> findSection(@PathVariable Long timesId){
        List<Section> list= ticketService.getSection(timesId);
        return new ResponseEntity<List<Section>>(list,HttpStatus.OK);
    }

    @GetMapping("/section/{concertId}")
    public ResponseEntity<List<Seat>> findSeat(@PathVariable Long sectionId){
        List<Seat> list = ticketService.getSeat(sectionId);
        return new ResponseEntity<List<Seat>>(list,HttpStatus.OK);
    }

    @GetMapping("/seat/{concertId}")
    public ResponseEntity<ResponseExistSeatDto> existSeat(@PathVariable Long seatId){
        return new ResponseEntity<ResponseExistSeatDto>(ticketService.getSeatStatus(seatId),HttpStatus.OK);
    }
}
