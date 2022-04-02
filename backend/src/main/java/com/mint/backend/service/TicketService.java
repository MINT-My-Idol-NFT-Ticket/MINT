package com.mint.backend.service;


import com.mint.backend.domain.Seat;
import com.mint.backend.domain.Section;
import com.mint.backend.domain.Times;
import com.mint.backend.dto.ResponseExistSeatDto;
import com.mint.backend.repository.SeatRepository;
import com.mint.backend.repository.SectionRepository;
import com.mint.backend.repository.TimesRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import java.util.List;


@Service
@RequiredArgsConstructor
public class TicketService {

    private final SectionRepository sectionRepository;
    private final SeatRepository seatRepository;
    private final TimesRepository timesRepository;

    //회차 조회
    @Transactional(readOnly = true)
    public List<Times> getTimes(Long concertId) {
        return timesRepository.findAllByConcert_Id(concertId);
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
            if(seat.getStatus()==1)return false;
            seat.updateStatus();
            seatRepository.save(seat);

        }catch (Exception e){
            return false;
        }
        return true;
    }
}
