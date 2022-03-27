package com.mint.backend.repository;

import com.mint.backend.domain.Concert;
import org.springframework.data.jpa.repository.JpaRepository;

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


}
