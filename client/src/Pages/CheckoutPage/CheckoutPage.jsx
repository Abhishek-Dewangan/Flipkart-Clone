import React from 'react';
import {useSelector} from 'react-redux';
import styles from './CheckoutPage.module.css';

const CheckoutPage = () => {
  const {user} = useSelector((state) => state.UserReducer);
  const products = JSON.parse(localStorage.getItem('checkout')) || [];
  return (
    <div className={styles.checkoutContainer}>
      <section className={styles.userDetails}>
        <p>Login</p>
        <p>
          {user.first_name} {user.last_name} +91{user.mobile_number}
        </p>
      </section>
      <section>
        <p>DELEVERY ADDRESS</p>
        <p>{products[0].name}</p>
      </section>
      <section>ORDER SUMMARY</section>
      <section>PAYMENT OPTIONS</section>
    </div>
  );
};

export default CheckoutPage;
