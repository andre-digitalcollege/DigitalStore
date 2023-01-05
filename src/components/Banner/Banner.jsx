import React from 'react'
import './Banner.css'
import WhiteSneakers from './img/White-Sneakers-PNG-Clipart 1.png'
import Ornament11 from './img/Ornament 11.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Banner() {
    return (
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
            <SwiperSlide>
                <div className="container">
                    <img src={Ornament11} alt="Ornament" className='ornamento-11' />
                    <img src={WhiteSneakers} alt="Shoe" className='shoe' />
                    <p className='mop' >Melhores ofertas personalizadas</p>
                    <p className='qsn'>Queima de stoque Nike 🔥</p>
                    <p className='texto'>Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur</p>
                    <button className='bnt-verOferta'>Ver Oferta</button>
                </div>
            </SwiperSlide>
            <SwiperSlide>BANNER 2</SwiperSlide>
            <SwiperSlide>BANNER 3</SwiperSlide>
            <SwiperSlide>BANNER 4</SwiperSlide>
        </Swiper>
    );
}