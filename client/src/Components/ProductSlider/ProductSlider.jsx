import React from 'react';
import styles from './ProductSlider.module.css';
import {useNavigate} from 'react-router-dom';
import {Navigation} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {Button, Placeholder} from 'react-bootstrap';

const ProductSlider = ({products, heading, link}) => {
  console.log(products);
  const navigate = useNavigate();
  return products.length ? (
    <div className={styles.sliderDiv}>
      <div className={styles.productHeading}>
        <h3>Top Deals on</h3>
        <h3>{heading}</h3>
        <Button variant='primary' onClick={() => navigate(link)}>
          VIEW ALL
        </Button>
      </div>
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
        {products.length &&
          products.map((elem) => {
            return (
              <SwiperSlide key={elem._id} className={styles.swiperSlider}>
                <img
                  className={styles.productImage}
                  onClick={() => navigate(`/productdetail/${elem._id}`)}
                  src={elem.thumbnail}
                  alt=''
                />
                <p
                  className={styles.productName}
                  onClick={() => navigate(`productdetail/${elem._id}`)}
                >
                  {elem.name}
                </p>
                <p>Under ₹{elem.current_price}</p>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  ) : (
    <Placeholder className={styles.sliderDiv} styles={{background: 'white'}}>
      <Placeholder className={styles.productHeading} />
      <Placeholder className={styles.swiper} />
    </Placeholder>
  );
};

export default ProductSlider;
