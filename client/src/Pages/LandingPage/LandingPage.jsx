import React from 'react';
import styles from './LandingPage.module.css';
import BannerSlider from '../../Components/BannerSlider/BannerSlider';
import SubHeader from '../../Components/SubHeader/SubHeader';
import {useSelector} from 'react-redux';
import ProductSlider from '../../Components/ProductSlider/ProductSlider';

const LandingPage = () => {
  const product = useSelector((state) => state.ProductReducer);
  const mobiles = product.products.filter((elem) => elem.category === 'mobile');
  const homes = product.products.filter((elem) => elem.category === 'home');
  const appliances = product.products.filter(
    (elem) => elem.category === 'appliance'
  );

  const bestMobiles = mobiles.splice(
    Math.floor(Math.random() * mobiles.length - 10),
    10
  );
  const bestHomes = homes.splice(
    Math.floor(Math.random() * homes.length - 10),
    10
  );
  const bestAppliances = appliances.splice(
    Math.floor(Math.random() * appliances.length - 10),
    10
  );
  return (
    <div className={styles.container}>
      <SubHeader />
      <BannerSlider />
      <div className={styles.sliderDiv}>
        <div className={styles.productHeading}>
          <h2>Best of Mobiles</h2>
        </div>
        <ProductSlider products={bestMobiles} />
      </div>
      <div className={styles.sliderDiv}>
        <div className={styles.productHeading}>
          <h2>Best of Homes</h2>
        </div>
        <ProductSlider products={bestHomes} />
      </div>
      <div className={styles.sliderDiv}>
        <div className={styles.productHeading}>
          <h2>Best of Appliances</h2>
        </div>
        <ProductSlider products={bestAppliances} />
      </div>
    </div>
  );
};

export default LandingPage;
