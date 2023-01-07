import React from 'react'
import ConteudoBanner1 from './ConteudoBanner1.jsx'
import ConteudoBanner2 from './ConteudoBanner2.jsx'
import ConteudoBanner3 from './ConteudoBanner3.jsx'
import ConteudoBanner4 from './ConteudoBanner4.jsx'
import './banner.css'

import { Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';


function Banner() {
  return (
    <Swiper className='containerBannerSlide'
    modules={[Navigation, Pagination]}
    spaceBetween={30}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}>
        <SwiperSlide><ConteudoBanner1/></SwiperSlide>
        <SwiperSlide><ConteudoBanner2/></SwiperSlide>
        <SwiperSlide><ConteudoBanner3/></SwiperSlide>
        <SwiperSlide><ConteudoBanner4/></SwiperSlide>
    </Swiper>
  )
}

export default Banner