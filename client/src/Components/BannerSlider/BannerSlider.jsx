import React, {useRef} from 'react';
import styles from './BannerSlider.module.css';
import {BannerData} from '../../Assets/BannerData';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

const BannerSlider = () => {
  SwiperCore.use([Autoplay]);
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      pagination={{clickable: true}}
      autoplay={{delay: 2500, disableOnInteraction: false}}
      navigation
      className={styles.bannerSliderContainer}
    >
      {BannerData.map((elem, i) => {
        return (
          <SwiperSlide key={i}>
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
