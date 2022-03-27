package com.mint.backend.controller;

import com.mint.backend.dto.requestConcertDto;
import com.mint.backend.service.ConcertService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * @packageName : com.mint.backend.controller
 * @fileName : adminController
 * @date : 2022-03-24
 * @language : JAVA
 * @classification :
 * @time_limit : 2sec
 * @required_time : 00:40 ~ 01:22
 * @submissions : 1
 * @description :
 **/
@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class AdminController {

    private final ConcertService concertService;

    @PostMapping
    public ResponseEntity create(@RequestBody requestConcertDto requestConcertDto){
        return ResponseEntity.ok().body("콘서트 정보 등록");
    }

    @PutMapping("/concert")
    public ResponseEntity update(@RequestBody requestConcertDto requestConcertDto){
        //to do
        return ResponseEntity.ok().body("콘서트 정보 수정");
    }

    @DeleteMapping("/concert")
    public ResponseEntity delete(@RequestParam Long concertId){
        //to do
        return ResponseEntity.ok().body("콘서트 정보 삭제");
    }

    @PostMapping("/concert/admin")
    public ResponseEntity existAuth(@RequestParam String keyword){
        //to do
        return ResponseEntity.ok().body("관리자 권한 확인");
    }
}
