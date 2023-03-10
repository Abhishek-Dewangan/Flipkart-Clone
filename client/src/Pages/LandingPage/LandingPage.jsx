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
  const babycares = product.products.filter(
    (elem) => elem.category === 'babycare'
  );
  const beauty = product.products.filter((elem) => elem.category === 'beauty');

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
  const bestBabycares = babycares.splice(
    Math.floor(Math.random() * babycares.length - 10),
    10
  );
  const bestBeauty = beauty.splice(
    Math.floor(Math.random() * beauty.length - 10),
    10
  );
  return (
    <div className={styles.container}>
      <SubHeader />
      <BannerSlider />
      <ProductSlider products={bestMobiles} heading={'Best Of Mobiles'} />
      <ProductSlider products={bestHomes} heading={'Best of Homes'} />
      <ProductSlider
        products={bestAppliances}
        heading={'Best of Applicances'}
      />
      <ProductSlider products={bestBabycares} heading={'Best of Baby Cares'} />
      <ProductSlider products={bestBeauty} heading={'Best of Beauty'} />
    </div>
  );
};

export default LandingPage;
