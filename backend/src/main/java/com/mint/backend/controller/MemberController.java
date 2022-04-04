package com.mint.backend.controller;



import com.mint.backend.dto.ResponseFindAllDto;
import com.mint.backend.dto.ResponseFindOneDto;
import com.mint.backend.dto.ResponseSearchDto;
import com.mint.backend.service.ConcertService;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
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

    @ApiOperation(
            value = "상태에 따른 콘서트 목록 조회"
    )
    @GetMapping
    public ResponseEntity<List<ResponseFindAllDto>> findAll(@RequestParam int status,Pageable pageable){

        return new ResponseEntity<>(concertService.getConcertList(status,pageable), HttpStatus.OK);
    }

    @ApiOperation(
            value = "콘서트 상세 페이지 조회"
    )
    @GetMapping("/{concertId}")
    public ResponseEntity<ResponseFindOneDto> findOne(@PathVariable Long concertId,Pageable pageable){
        return new ResponseEntity(concertService.getConcertDetail(concertId),HttpStatus.OK);
    }

    @ApiOperation(
            value = "콘서트 검색"
    )
    @GetMapping("/search")
    public ResponseEntity<ResponseSearchDto> search(@RequestParam String keyword,Pageable pageable){
        return new ResponseEntity(concertService.search(keyword,pageable),HttpStatus.OK);
    }
    @ApiOperation(
            value = " 계약서 조회"
    )
    @GetMapping("/contracts")
    public ResponseEntity<List<?>> findContracts(String contract){
        return new ResponseEntity<>(concertService.findContracts(contract),HttpStatus.OK);
    }
}