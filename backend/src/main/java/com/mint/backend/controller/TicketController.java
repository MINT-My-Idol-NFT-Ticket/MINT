package com.mint.backend.controller;

import com.mint.backend.domain.Seat;
import com.mint.backend.domain.Section;
import com.mint.backend.domain.Times;
import com.mint.backend.dto.ResponseExistSeatDto;
import com.mint.backend.dto.ResponseFindDayDTO;
import com.mint.backend.dto.ResponseSeatAllDto;
import com.mint.backend.service.TicketService;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
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
    @ApiOperation(
            value = "회차별 선택 가능 날짜 목록 조회"
    )
    @GetMapping("/concert/{concertId}")
    public ResponseEntity<List<ResponseFindDayDTO>> findDay(@PathVariable Long concertId){
        return new ResponseEntity<>(ticketService.getTimes(concertId), HttpStatus.OK);
    }
    @ApiOperation(
            value = "날짜별 선택 가능 구역 목록 조회"
    )
    @GetMapping("/times/{timesId}")
    public ResponseEntity<List<Section>> findSection(@PathVariable Long timesId){
        List<Section> list= ticketService.getSection(timesId);
        return new ResponseEntity<>(list,HttpStatus.OK);
    }
    @ApiOperation(
            value = "구역별 선택 가능 좌석 목록 조회"
    )
    @GetMapping("/section/{sectionId}")
    public ResponseEntity<List<Seat>> findSeat(@PathVariable Long sectionId){
        List<Seat> list = ticketService.getSeat(sectionId);
        return new ResponseEntity<>(list,HttpStatus.OK);
    }
    @ApiOperation(
            value = "선택 좌석 예매 가능 여부 조회"
    )
    @GetMapping("/seat/{seatId}")
    public ResponseEntity<ResponseExistSeatDto> existSeat(@PathVariable Long seatId){
        return new ResponseEntity<>(ticketService.getSeatStatus(seatId),HttpStatus.OK);
    }
    @ApiOperation(
            value = "좌석 상태 변경"
    )
    @PutMapping
    public ResponseEntity<Boolean> updateSeatStatus(@RequestParam Long seatId){
        return new ResponseEntity<>(ticketService.updateSeatStatus(seatId),HttpStatus.OK);
    }
    @ApiOperation(
            value = "구역별 선택 가능 좌석 목록 전체 조회"
    )
    @GetMapping("/extraSeat/{timesId}")
    public ResponseEntity<List<ResponseSeatAllDto>> findSeatAll(@PathVariable Long timesId){
        return new ResponseEntity<>(ticketService.getExtraSeat(timesId), HttpStatus.OK);
    }
}
