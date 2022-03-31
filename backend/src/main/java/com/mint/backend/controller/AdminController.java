package com.mint.backend.controller;

import com.mint.backend.dto.RequestConcertDto;
import com.mint.backend.dto.RequestExistAuthDto;
import com.mint.backend.service.ConcertService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

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
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class AdminController {

    private final ConcertService concertService;

    @PostMapping("/concert")
    public ResponseEntity<Boolean> create(@RequestPart(value = "poster") MultipartFile poster,
                                          @RequestPart(value = "thumnail") MultipartFile thumnail,
                                          @RequestPart(value = "description") MultipartFile description,
                                          @RequestPart(value = "seats") MultipartFile seats,
                                          @RequestPart(value = "key") RequestConcertDto data) throws IOException {
        //디렉토리생성
        String folderPath = System.getProperty("user.home") + File.separator + "img" + File.separator + data.getTitle();
        File makeFolder = new File(folderPath);
        if (!makeFolder.exists()) {
            try {
                makeFolder.mkdirs();
            } catch (Exception e) {
                e.getStackTrace();
            }
        }

        //콘서트 등록
        boolean result = concertService.create(poster, thumnail, description, seats, data);

        return new ResponseEntity<Boolean>(result, HttpStatus.OK);
    }

    @PutMapping("/concert")
    public ResponseEntity update(@RequestParam Long concertId) {
        //to do
        return ResponseEntity.ok().body("콘서트 정보 수정");
    }

    @DeleteMapping("/concert")
    public ResponseEntity<Boolean> delete(@RequestParam Long concertId) {
        boolean result = concertService.delete(concertId);
        return new ResponseEntity<Boolean>(result, HttpStatus.OK);
    }

    @PostMapping("/concert/admin")
    public ResponseEntity<Boolean> existAuth(@RequestBody RequestExistAuthDto admin) {
        boolean flag = false;
        if (admin.getId().equals("admin") && admin.getPassword().equals("admin")) {
            flag = true;
        }

        return new ResponseEntity<Boolean>(flag, HttpStatus.OK);
    }
}
