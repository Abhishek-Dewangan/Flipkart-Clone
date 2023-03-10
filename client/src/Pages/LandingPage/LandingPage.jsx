import React from 'react';
import styles from './LandingPage.module.css';
import BannerSlider from '../../Components/BannerSlider/BannerSlider';
import SubHeader from '../../Components/SubHeader/SubHeader';
import {useSelector} from 'react-redux';
import ProductSlider from '../../Components/ProductSlider/ProductSlider';

const LandingPage = () => {
  const product = useSelector((state) => state.ProductReducer);
  let mobiles = product.products.filter((elem) => elem.category === 'mobile');
  const bestMobiles = mobiles.splice(
    Math.floor(Math.random() * mobiles.length - 10),
    10
  );
  return (
    <div className={styles.container}>
      <SubHeader />
      <BannerSlider />
      <div className={styles.bestOfMobiles}>
        <div className={styles.mobileHeading}>
          <h2>Best of Mobiles</h2>
        </div>
        <ProductSlider bestMobiles={bestMobiles} />
      </div>
    </div>
  );
};

export default LandingPage;
