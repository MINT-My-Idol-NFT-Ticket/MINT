package com.mint.backend.dto;

import com.mint.backend.domain.Seat;
import com.mint.backend.domain.Section;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
public class ResponseSeatAllDto {
    private Long id;
    private String name;
    private Long extraSeat;

//   public List<ResponseSeatAllDto> toDTO(List<Seat> seat) {
//       List<ResponseSeatAllDto> result =new ArrayList<>();
//       for (Seat s : seat) {
//           result.add(ResponseSeatAllDto.builder()
//                   .name(s.getName())
//                   .extraSeat();
//                   .build());
//       }
//       return result;
//    }




}
