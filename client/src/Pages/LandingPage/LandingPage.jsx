import React, {useEffect} from 'react';
import styles from './LandingPage.module.css';
import BannerSlider from '../../Components/BannerSlider/BannerSlider';
import SubHeader from '../../Components/SubHeader/SubHeader';

const LandingPage = () => {
  return (
    <div className={styles.container}>
      <SubHeader />
      <BannerSlider />
    </div>
  );
};

export default LandingPage;
