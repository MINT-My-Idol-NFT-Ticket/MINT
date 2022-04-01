package com.mint.backend.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

/**
 * @packageName : com.mint.backend.domain
 * @fileName : Cid
 * @date : 2022-04-01
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
public class Cids {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="cids_id")
    private Long id;
    private String cid;

    @ManyToOne
    @JsonIgnore
    @JoinColumn(name="concert_id")
    private Concert concert;

}
