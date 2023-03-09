import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, Autoplay } from 'swiper';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import TutsCard from './TutsCard';


const Slider = (props) => {

    const { slideData, slideView, space } = props;

    return (
        <Swiper
            modules={[Pagination, A11y, Autoplay]}
            speed={400}
            spaceBetween={space}
            slidesPerView={slideView}
            pagination={{ clickable: true }}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }}
        >
            {
                slideData.map(item => {
                    return (
                        <SwiperSlide key={item.id} className="section">
                            <TutsCard {...item} />
                        </SwiperSlide>
                    );
                })
            }
        </Swiper>
    );
};

export default Slider;