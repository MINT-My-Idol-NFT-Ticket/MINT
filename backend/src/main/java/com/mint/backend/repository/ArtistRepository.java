package com.mint.backend.repository;

import com.mint.backend.domain.Artist;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @packageName : com.mint.backend.repository
 * @fileName : ArtistRepository
 * @date : 2022-03-25
 * @language : JAVA
 * @classification :
 * @time_limit : 2sec
 * @required_time : 00:40 ~ 01:22
 * @submissions : 1
 * @description :
 **/
public interface ArtistRepository extends JpaRepository<Artist,Long> {
}
