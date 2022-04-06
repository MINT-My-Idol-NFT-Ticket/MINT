package com.mint.backend.repository;

import com.mint.backend.domain.UriData;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UriDataRepository extends JpaRepository<UriData, Long> {

    public UriData findByTitle(String title);
}
