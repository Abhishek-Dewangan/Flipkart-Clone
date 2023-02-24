import React, {useEffect} from 'react';
import styles from './LandingPage.module.css';
import {useDispatch, useSelector} from 'react-redux';
import BannerSlider from '../../Components/BannerSlider/BannerSlider';
import {getPrducts} from '../../Services/Actions/ProductAction';

const LandingPage = () => {
  const dispatch = useDispatch();
  const {products} = useSelector((state) => state.ProductReducer);
  useEffect(() => {
    getPrducts(dispatch);
  }, []);
  useEffect(() => {
    console.log(products);
  }, [products]);
  return (
    <div className={styles.container}>
      <BannerSlider />
    </div>
  );
};

export default LandingPage;
