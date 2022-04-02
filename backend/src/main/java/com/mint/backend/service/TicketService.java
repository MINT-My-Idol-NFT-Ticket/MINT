package com.mint.backend.service;


import com.mint.backend.domain.Seat;
import com.mint.backend.domain.Section;
import com.mint.backend.domain.Times;
import com.mint.backend.dto.ResponseExistSeatDto;
import com.mint.backend.dto.ResponseFindDayDTO;
import com.mint.backend.dto.ResponseSeatAllDto;
import com.mint.backend.repository.SeatRepository;
import com.mint.backend.repository.SectionRepository;
import com.mint.backend.repository.TimesRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import java.util.ArrayList;
import java.util.List;


@Service
@RequiredArgsConstructor
public class TicketService {

    private final SectionRepository sectionRepository;
    private final SeatRepository seatRepository;
    private final TimesRepository timesRepository;

    //회차 조회
    @Transactional(readOnly = true)
    public List<ResponseFindDayDTO> getTimes(Long concertId) {
        List<Times> data = timesRepository.findAllByConcert_Id(concertId);
        List<ResponseFindDayDTO> list = new ArrayList();
        for (Times ti : data) {
            String dateformat = ti.getDate().substring(0, 8);
            dateformat = dateformat.replace('.', '-');
            String timeformat = ti.getDate().substring(9, 11) + ":" + ti.getDate().substring(11);

            list.add(ResponseFindDayDTO.builder()
                    .id(ti.getId())
                    .date(dateformat)
                    .time(timeformat)
                    .build());
        }
        return list;
    }

    //구역 조회
    @Transactional(readOnly = true)
    public List<Section> getSection(Long timesId) {
        return sectionRepository.findAllByTimesId(timesId);
    }

    //좌석 조회
    @Transactional(readOnly = true)
    public List<Seat> getSeat(Long sectionId) {
        return seatRepository.findAllBySectionId(sectionId);
    }

    //예매가능여부
    @Transactional(readOnly = true)
    public ResponseExistSeatDto getSeatStatus(Long seatId) {
        Seat seat = seatRepository.findById(seatId).orElseThrow(RuntimeException::new);
        return new ResponseExistSeatDto(seat.getStatus());
    }

    //좌석 상태변경
    public boolean updateSeatStatus(Long SeatId) {
        try {
            Seat seat = seatRepository.findById(SeatId).orElseThrow(RuntimeException::new);
            if (seat.getStatus() == 1) return false;
            seat.updateStatus();
            seatRepository.save(seat);

        } catch (Exception e) {
            return false;
        }
        return true;
    }

//     구역별 잔여 좌석 전체 조회
    @Transactional(readOnly = true)
    public List<ResponseSeatAllDto> getExtraSeat(Long timesId){
        List<Section> list = sectionRepository.findAllByTimesId(timesId);
        List<ResponseSeatAllDto> result = new ArrayList<>();
        for (Section section : list) {
            result.add(ResponseSeatAllDto.builder()
                    .name(section.getName())
                    .extraSeat(seatRepository.countSeatBySectionIdAndStatus(section.getId(),0))
                    .build());


        }
        return result;
    }
}
