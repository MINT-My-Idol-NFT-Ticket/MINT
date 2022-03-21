package com.mint.backend.controller;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @packageName : com.mint.backend.controller
 * @fileName : testcontroller
 * @date : 2022-03-21
 * @submissions : 1
 * @description :
 **/
@RestController
@RequestMapping("/test")
public class testcontroller {

    @GetMapping
    public ResponseEntity<String> hello_docker(){
        return ResponseEntity.ok().body("hello docker");
    }
}
