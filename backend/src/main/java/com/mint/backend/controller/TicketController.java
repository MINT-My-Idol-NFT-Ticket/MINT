package com.mint.backend.controller;

import com.mint.backend.service.TicketService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
@CrossOrigin
@RestController
@RequestMapping("/api/ticket")
@RequiredArgsConstructor
public class TicketController {

    private final TicketService ticketService;

    @GetMapping("/concert/{concertId}")
    public ResponseEntity findDay(@PathVariable Long concertId){
        //to do
        return ResponseEntity.ok().body("회차별 선택가능한 날짜");
    }

    @GetMapping("/times/{concertId}")
    public ResponseEntity findSection(@PathVariable Long timesId){
        //to do
        return ResponseEntity.ok().body("날짜별 선택가능한 구역");
    }

    @GetMapping("/section/{concertId}")
    public ResponseEntity findSeat(@PathVariable Long sectionId){
        //to do
        return ResponseEntity.ok().body("구역별 선택 가능 좌석");
    }

    @GetMapping("/seat/{concertId}")
    public ResponseEntity existSeat(@PathVariable Long seatId){
        //to do
        return ResponseEntity.ok().body("선택 가능 좌석 예매 가능 여부");
    }
}
