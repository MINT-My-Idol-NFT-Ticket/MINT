package com.mint.backend.controller;

import com.mint.backend.domain.Concert;
import com.mint.backend.dto.ResponseFindAllDto;
import com.mint.backend.dto.ResponseFindOneDto;
import com.mint.backend.dto.ResponseSearchDto;
import com.mint.backend.service.ConcertService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * @packageName : com.mint.backend.controller
 * @fileName : UserController
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
@RequiredArgsConstructor
@RequestMapping("/api/concert")
public class MemberController {

    private final ConcertService concertService;

    @GetMapping
    public ResponseEntity<List<ResponseFindAllDto>> findAll(@RequestParam int status){
        return new ResponseEntity<>(concertService.getConcertList(status), HttpStatus.OK);
    }

    @GetMapping("/{concertId}")
    public ResponseEntity<ResponseFindOneDto> findOne(@PathVariable Long concertId){
        return new ResponseEntity(concertService.getConcertDetail(concertId),HttpStatus.OK);
    }

    @GetMapping("/search")
    public ResponseEntity<ResponseSearchDto> search(@RequestParam String keyword){
        return new ResponseEntity(concertService.search(keyword),HttpStatus.OK);
    }
}