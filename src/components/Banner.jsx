import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './Banner.css';

export default function Banner(){
  return  (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>BANNER 1</SwiperSlide>
      <SwiperSlide>BANNER 2</SwiperSlide>
      <SwiperSlide>BANNER 3</SwiperSlide>
      <SwiperSlide>BANNER 4</SwiperSlide>
    </Swiper>
  );
}