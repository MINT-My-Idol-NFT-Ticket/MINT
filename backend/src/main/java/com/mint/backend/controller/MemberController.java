package com.mint.backend.controller;

import com.mint.backend.domain.Concert;
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
    public ResponseEntity<List<Concert>> findAll(@RequestParam int status){
        List<Concert> list = concertService.getConcertList(status);
        return new ResponseEntity<List<Concert>>(list, HttpStatus.OK);
    }

    @GetMapping("/{concertId}")
    public ResponseEntity findOne(@PathVariable Long concertId){

        return ResponseEntity.ok().body("상세페이지");
    }

    @GetMapping("/search")
    public ResponseEntity search(@RequestParam String keyword){
        //to do
        return ResponseEntity.ok().body("콘서트 검색");
    }
}