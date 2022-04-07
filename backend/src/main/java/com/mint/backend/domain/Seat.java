package com.mint.backend.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

/**
 * @packageName : com.mint.backend.dto
 * @fileName : Seat
 * @date : 2022-03-23
 * @language : JAVA
 * @classification :
 * @time_limit : 2sec
 * @required_time : 00:40 ~ 01:22
 * @submissions : 1
 * @description :
 **/
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class Seat {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private Date date;
    @Column(columnDefinition = "Integer default 0")
    private int status;

    @ManyToOne
    @JsonIgnore
    @JoinColumn(name="section_id")
    private Section section;

    public void updateStatus(){
        this.status=1;
        this.date= new Date();

    }
    public void cancelSeat(){
        this.status = 0;
    }
}
