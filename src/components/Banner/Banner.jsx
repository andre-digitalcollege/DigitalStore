import React from 'react'
import ConteudoBanner from './ConteudoBanner.jsx'
import './banner.css'

import { Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';


function Banner() {
  return (
    <div style={{justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
      <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}>
        <SwiperSlide><ConteudoBanner/></SwiperSlide>
        <SwiperSlide><ConteudoBanner/></SwiperSlide>
        <SwiperSlide><ConteudoBanner/></SwiperSlide>
        <SwiperSlide><ConteudoBanner/></SwiperSlide>
    </Swiper>
    </div>
  )
}

export default Banner