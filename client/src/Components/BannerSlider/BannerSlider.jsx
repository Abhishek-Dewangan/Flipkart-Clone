import React from 'react';
import styles from './BannerSlider.module.css';
import {BannerData} from '../../Assets/BannerData';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, Scrollbar, A11y} from 'swiper';
import "swiper/css";
import "swiper/css/pagination";

const BannerSlider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      pagination={{clickable: true}}
    >
      {BannerData.map((elem, i) => {
        return (
          <SwiperSlide>
            <img
              src={elem.banner}
              alt='Banner'
              className={styles.bannerImage}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default BannerSlider;
