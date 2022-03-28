package com.mint.backend.controller;

import com.mint.backend.dto.requestConcertDto;
import com.mint.backend.service.ConcertService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.File;
import java.io.IOException;

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
@CrossOrigin
@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class AdminController {

    private final ConcertService concertService;

    @PostMapping
    public ResponseEntity<Boolean> create(@RequestBody requestConcertDto requestConcertDto) throws IOException {
        //디렉토리생성
        String folderPath  = "backend/src/main/resources/image"+requestConcertDto.getTitle();
        File makeFolder = new File(folderPath);
        if(!makeFolder.exists())makeFolder.mkdir();
        //콘서트 등록
        boolean result = concertService.create(requestConcertDto);

        return new ResponseEntity<Boolean>(result, HttpStatus.OK);
    }

    @PutMapping("/concert")
    public ResponseEntity update(@RequestBody requestConcertDto requestConcertDto){
        //to do
        return ResponseEntity.ok().body("콘서트 정보 수정");
    }

    @DeleteMapping("/concert")
    public ResponseEntity delete(@RequestParam Long concertId){
        concertService.delete(concertId);
        return ResponseEntity.ok().body("콘서트 정보 삭제");
    }

    @PostMapping("/concert/admin")
    public ResponseEntity existAuth(@RequestParam String keyword){
        //to do
        return ResponseEntity.ok().body("관리자 권한 확인");
    }
}
