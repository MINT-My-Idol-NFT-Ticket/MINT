package com.mint.backend.repository;

import com.mint.backend.domain.Concert;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

/**
 * @packageName : com.mint.backend.repository
 * @fileName : ConcertRepository
 * @date : 2022-03-24
 * @language : JAVA
 * @classification :
 * @time_limit : 2sec
 * @required_time : 00:40 ~ 01:22
 * @submissions : 1
 * @description :
 **/
public interface ConcertRepository extends JpaRepository<Concert,Long> {
    @Query("select a from Concert a where a.status =  ?1 ")
    public List<Concert> findConcert(int status);

}
