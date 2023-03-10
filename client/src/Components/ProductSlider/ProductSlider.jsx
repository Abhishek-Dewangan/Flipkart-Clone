import React from 'react';
import styles from './ProductSlider.module.css';
import {Navigation} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const ProductSlider = ({bestMobiles}) => {
  return (
    <Swiper
      className={styles.swiper}
      modules={[Navigation]}
      slidesPerView={1}
      spaceBetween={10}
      navigation={{clickable: true}}
      breakpoints={{
        '@0.00': {
          slidesPerView: 1,
          // spaceBetween: 10,
        },
        '@0.75': {
          slidesPerView: 2,
          // spaceBetween: 20,
        },
        '@1.00': {
          slidesPerView: 3,
          // spaceBetween: 40,
        },
        '@1.50': {
          slidesPerView: 4,
          // spaceBetween: 50,
        },
      }}
    >
      {bestMobiles.length &&
        bestMobiles.map((elem) => {
          return (
            <SwiperSlide key={elem._id} className={styles.swiperSlider}>
              <img
                className={styles.productImage}
                src={elem.thumbnail}
                alt=''
              />
              <p className={styles.productName}>{elem.name}</p>
              <p>Under ₹{elem.current_price}</p>
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
};

export default ProductSlider;
