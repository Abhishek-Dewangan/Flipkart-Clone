import React, {useEffect} from 'react';
import styles from './LandingPage.module.css';
import {useSelector} from 'react-redux';
import BannerSlider from '../../Components/BannerSlider/BannerSlider';
import SubHeader from '../../Components/SubHeader/SubHeader';

const LandingPage = () => {
  const {products} = useSelector((state) => state.ProductReducer);
  useEffect(() => {
    // console.log(products);
  }, [products]);
  return (
    <div className={styles.container}>
      <SubHeader />
      <BannerSlider />
    </div>
  );
};

export default LandingPage;
