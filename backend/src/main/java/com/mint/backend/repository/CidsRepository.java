package com.mint.backend.repository;

import com.mint.backend.domain.Cids;
import com.mint.backend.domain.Concert;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @packageName : com.mint.backend.repository
 * @fileName : CidsRepository
 * @date : 2022-04-01
 * @language : JAVA
 * @classification :
 * @time_limit : 2sec
 * @required_time : 00:40 ~ 01:22
 * @submissions : 1
 * @description :
 **/
public interface CidsRepository extends JpaRepository<Cids,Long> {
}
