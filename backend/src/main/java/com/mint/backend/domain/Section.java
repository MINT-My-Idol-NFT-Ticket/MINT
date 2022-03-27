package com.mint.backend.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

/**
 * @packageName : com.mint.backend.dto
 * @fileName : Section
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
public class Section {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="section_id")
    private Long id;
    private String name;

    @OneToMany
    private List<Seat> seats = new ArrayList<>();
}
