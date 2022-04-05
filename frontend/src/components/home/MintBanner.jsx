// div 영역 스타일은 배너 리소스 확보시 삭제
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'

// import required modules
import { Autoplay } from 'swiper'

export default function MintBanner() {
  return (
    <Swiper
      speed={1500}
      loop={true}
      autoplay={{
        delay: 7000,
      }}
      modules={[Autoplay]}>
      <SwiperSlide>
        <img src={`/banner1.png`} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={`/banner2.png`} />
      </SwiperSlide>
    </Swiper>
  )
}
