import React from 'react';
import {Button} from 'react-bootstrap';
import {useSelector} from 'react-redux';
import styles from './CheckoutPage.module.css';

const CheckoutPage = ({handleShowAddress}) => {
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
        <Button variant='outline-primary' onClick={handleShowAddress}>
          Add Address
        </Button>
        <div></div>
      </section>
      <section>
        <p>ORDER SUMMARY</p>
        <div>
          {products.map((elem) => {
            return <div>{elem.name}</div>;
          })}
        </div>
      </section>
      <section>PAYMENT OPTIONS</section>
    </div>
  );
};

export default CheckoutPage;
