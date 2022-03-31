package com.mint.backend.service;

import com.mint.backend.domain.*;
import com.mint.backend.dto.RequestConcertDto;
import com.mint.backend.dto.ResponseFindOneDto;
import com.mint.backend.dto.ResponseSearchDto;
import com.mint.backend.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * @packageName : com.mint.backend.service
 * @fileName : ConcertService
 * @date : 2022-03-25
 * @language : JAVA
 * @classification :
 * @time_limit : 2sec
 * @required_time : 00:40 ~ 01:22
 * @submissions : 1
 * @description :
 **/
@Service
@RequiredArgsConstructor
public class ConcertService {

    private final ConcertRepository concertRepository;
    private final ImageRepository imageRepository;
    private final ArtistRepository artistRepository;
    private final TimesRepository timesRepository;
    private final SeatRepository seatRepository;
    private final SectionRepository sectionRepository;

    /**
     * 콘서트 목록 조회
     *
     * @param status
     * @return
     */
    @Transactional
    public List<Concert> getConcertList(int status) {
        return concertRepository.findConcert(status);
    }


    /**
     * 콘서트 상세정보
     *
     * @param concertId
     * @return
     */
    public ResponseFindOneDto getConcertDetail(Long concertId) {
        return new ResponseFindOneDto()
                .toDTO(concertRepository
                        .findById(concertId)
                        .orElseThrow(RuntimeException::new));
    }


    /**
     * 콘서트 검색
     *
     * @param keyword
     * @return
     */
    public List<ResponseSearchDto> search(String keyword) {
        return new ResponseSearchDto()
                .toDto(concertRepository.searchConcert(keyword));
    }


    /**
     * 콘서트 등록
     *
     * @param file1
     * @param file2
     * @param file3
     * @param file4
     * @param requestConcertDto
     * @return
     * @throws IOException
     */
    public boolean create(MultipartFile file1,
                          MultipartFile file2,
                          MultipartFile file3,
                          MultipartFile file4,
                          RequestConcertDto requestConcertDto) throws IOException {
        //기본경로
        String path = System.getProperty("user.home") + File.separator + "img" + File.separator + requestConcertDto.getTitle();

        String postPath = path + File.separator + file1.getOriginalFilename();
        String sectionPath = path + File.separator + file2.getOriginalFilename();
        String DescriptionPath = path + File.separator + file3.getOriginalFilename();
        String comingPath = path + File.separator + file4.getOriginalFilename();

        //이미지 저장
        file1.transferTo(new File(path, file1.getOriginalFilename()));
        file2.transferTo(new File(path, file2.getOriginalFilename()));
        file3.transferTo(new File(path, file3.getOriginalFilename()));
        file4.transferTo(new File(path, file4.getOriginalFilename()));
        try {
            Image image = Image.builder()
                    .comingUrl(comingPath)
                    .descriptionUrl(DescriptionPath)
                    .posterUrl(postPath)
                    .sectionUrl(sectionPath)
                    .build();
            //콘서트등록
            Concert concert = Concert.builder()
                    .title(requestConcertDto.getTitle())
                    .place(requestConcertDto.getPlace())
                    .contractAddress(requestConcertDto.getContractAddress())
                    .saleContractAddress(requestConcertDto.getSaleContractAddress())
                    .price(requestConcertDto.getPrice())
                    .status(requestConcertDto.getStatus())
                    .image(image)
                    .build();

            concertRepository.save(concert);
            //가수등록
            String[] str = requestConcertDto.getSinger();
            List<Artist> artists = new ArrayList<>();
            for (int i = 0; i < str.length; i++) {
                artistRepository.save(Artist.builder()
                        .name(str[i])
                        .concert(concert)
                        .build());


            }


            //시간등록
            int turn = requestConcertDto.getTime();
            for (int i = 0; i < turn; i++) {
                Times time = Times.builder()
                        .date(requestConcertDto.getTimeTable()[i])
                        .concert(concert)
                        .build();
                timesRepository.save(time);


                //섹션등록
                Map<String, Integer> map = requestConcertDto.getSection();

                for (String s : map.keySet()) {
                    Section section = Section.builder()
                            .name(s)
                            .times(time)
                            .build();
                    sectionRepository.save(section);

                    //자리등록
                    for (int j = 0; j < map.get(s); j++) {
                        Seat seat = Seat.builder()
                                .name(Integer.toString(j))
                                .section(section)
                                .build();
                        seatRepository.save(seat);


                    }


                }

            }

        } catch (Exception e) {
            return false;
        }
        return true;
    }

    //콘서트 수정
    public Concert update() {
        //to do
        return new Concert();
    }

    /**
     * 콘서트 삭제
     *
     * @param ConcertId
     * @return
     */
    public boolean delete(Long ConcertId) {
        try {
            concertRepository.deleteById(ConcertId);
        } catch (Exception e) {
            return false;
        }
        return true;
    }
}
