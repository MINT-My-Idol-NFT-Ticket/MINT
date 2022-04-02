package com.mint.backend.dto;

import com.mint.backend.domain.Section;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
public class ResponseSeatAllDto {
    private String section;
    private int extraSeat;


}
