import React, {useState} from 'react';
import {Button} from 'react-bootstrap';
import {useSelector} from 'react-redux';
import CartSidebar from '../CartPage/CartSidebar';
import styles from './CheckoutPage.module.css';

const CheckoutPage = ({handleShowAddress, handleShowEditAddress}) => {
  const {user} = useSelector((state) => state.UserReducer);
  const {addressData} = useSelector((state) => state.AddressReducer);
  const products = JSON.parse(localStorage.getItem('checkout')) || [];

  return (
    <div className={styles.checkoutContainer}>
      <div className={styles.orderSummaryBox}>
        <section className={styles.userDetails}>
          <p>Login</p>
          <p>
            {user.first_name} {user.last_name} +91{user.mobile_number}
          </p>
        </section>
        <section className={styles.deleveryAddress}>
          <p>DELEVERY ADDRESS</p>
          {addressData.length ? (
            <div>
              <p>{addressData[0].houseAddress}</p>
              <Button variant='outline-primary' onClick={handleShowEditAddress}>
                Edit Address
              </Button>
            </div>
          ) : (
            <Button variant='outline-primary' onClick={handleShowAddress}>
              Add Address
            </Button>
          )}
          <div></div>
        </section>
        <section className={styles.orderSummary}>
          <p>ORDER SUMMARY</p>
          <div>
            {products.map((elem, i) => {
              return <div key={i}>{elem.name}</div>;
            })}
          </div>
        </section>
        <section className={styles.paymentOptions}>PAYMENT OPTIONS</section>
      </div>
      <div className={styles.priceDetailBox}>
        <CartSidebar cartData={products} />
      </div>
    </div>
  );
};

export default CheckoutPage;
