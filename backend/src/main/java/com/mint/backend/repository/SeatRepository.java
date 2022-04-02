package com.mint.backend.repository;

import com.mint.backend.domain.Seat;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

/**
 * @packageName : com.mint.backend.repository
 * @fileName : SeatRepository
 * @date : 2022-03-25
 * @language : JAVA
 * @classification :
 * @time_limit : 2sec
 * @required_time : 00:40 ~ 01:22
 * @submissions : 1
 * @description :
 **/
public interface SeatRepository extends JpaRepository<Seat,Long> {
    List<Seat> findAllBySectionId(@Param(value = "scetionId")Long sectionId);

    @Query("select a from Seat a where a.status = 0 and a.section_Id = :sectionId")
    List<Seat> findAllBySectionIdAndStatus(@Param(value = "sectionId")Long sectionId);

}
