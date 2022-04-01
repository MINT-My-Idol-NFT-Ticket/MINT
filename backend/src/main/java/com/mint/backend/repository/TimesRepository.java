package com.mint.backend.repository;

import com.mint.backend.domain.Times;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

/**
 * @packageName : com.mint.backend.repository
 * @fileName : TimesRepository
 * @date : 2022-03-25
 * @language : JAVA
 * @classification :
 * @time_limit : 2sec
 * @required_time : 00:40 ~ 01:22
 * @submissions : 1
 * @description :
 **/
public interface TimesRepository extends JpaRepository<Times,Long> {
    List<Times> findAllByConcert_Id(@Param(value = "concert_id")Long concertId);
    //endDate
    Times findFirstByConcert_IdOrderByDateDesc(@Param(value = "concert_id")Long concertId);
    //startDate
    Times findFirstByConcert_IdOrderByDateAsc(@Param(value = "concert_id")Long concertId);
}
