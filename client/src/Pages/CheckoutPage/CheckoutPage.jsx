import React, {useEffect, useState} from 'react';
import {Button} from 'react-bootstrap';
import {useSelector} from 'react-redux';
import CartSidebar from '../CartPage/CartSidebar';
import styles from './CheckoutPage.module.css';
import fAssured from '../../Assets/Images/f-assured.png';
import {Link} from 'react-router-dom';

const CheckoutPage = ({handleShowAddress, handleShowEditAddress}) => {
  const [stage, setStage] = useState(2);
  const {user} = useSelector((state) => state.UserReducer);
  const {addressData} = useSelector((state) => state.AddressReducer);
  const products = JSON.parse(localStorage.getItem('checkout')) || [];

  return (
    <div className={styles.checkoutContainer}>
      <div className={styles.orderSummaryBox}>
        {
          <section className={styles.userDetails}>
            <p className={styles.sectionHeading}>
              <span className={styles.headingNumber}>1</span> LOGIN
            </p>
            <div className={styles.sectionBody}>
              <p>
                <b>
                  {user.first_name} {user.last_name}
                </b>{' '}
                +91{user.mobile_number}
              </p>
            </div>
          </section>
        }
        {stage === 2 ? (
          <section className={styles.deleveryAddress}>
            <div className={styles.focusHeading}>
              <span className={styles.headingNumber}>2</span> DELEVERY ADDRESS
            </div>
            {addressData.length ? (
              <div>
                <div className={styles.focusAddressBody}>
                  <p className={styles.address}>
                    <b>{addressData[0].name}</b> {addressData[0].houseAddress}{' '}
                    {addressData[0].city} {addressData[0].state} -{' '}
                    {addressData[0].pincode}
                  </p>
                  <Button
                    variant='outline-primary'
                    onClick={handleShowEditAddress}
                  >
                    Edit Address
                  </Button>
                </div>
                <button
                  className={styles.deleveryHereBtn}
                  onClick={() => setStage(3)}
                >
                  DELEVERY HERE
                </button>
              </div>
            ) : (
              <Button
                className={styles.focusAddAddressBtn}
                variant='outline-primary'
                onClick={handleShowAddress}
              >
                Add Address
              </Button>
            )}
          </section>
        ) : (
          <section className={styles.deleveryAddress}>
            <p className={styles.sectionHeading}>
              <span className={styles.headingNumber}>2</span> DELEVERY ADDRESS
            </p>
            {addressData.length ? (
              <div className={styles.sectionBody}>
                <p className={styles.address}>
                  <b>{addressData[0].name}</b> {addressData[0].houseAddress}{' '}
                  {addressData[0].city} {addressData[0].state} -{' '}
                  {addressData[0].pincode}
                </p>
                <Button variant='outline-primary' onClick={() => setStage(2)}>
                  Change Address
                </Button>
              </div>
            ) : (
              <Button
                className={styles.addAddress}
                variant='outline-primary'
                onClick={handleShowAddress}
              >
                Add Address
              </Button>
            )}
            <div></div>
          </section>
        )}
        {stage === 3 ? (
          <section className={styles.orderSummary}>
            <p className={styles.focusHeading}>
              <span className={styles.headingNumber}>3</span> ORDER SUMMARY
            </p>
            <div className={styles.focusOrderSummaryBody}>
              {products.map((elem, i) => {
                // Calculating discount percent of products
                const discount = Math.floor(
                  100 - (elem.current_price * 100) / elem.original_price
                );
                return (
                  <div key={elem._id}>
                    <div className={styles.productBox}>
                      <Link
                        to={`/productdetail/${elem.productId}`}
                        className={styles.imgDiv}
                      >
                        <img
                          src={elem.thumbnail}
                          alt={elem.name}
                          className={styles.productImage}
                        />
                      </Link>
                      <div className={styles.productDetails}>
                        <Link
                          to={`/productdetail/${elem.productId}`}
                          className={styles.productName}
                        >
                          <span>{elem.name}</span>
                        </Link>
                        <img
                          className={styles.fAssured}
                          src={fAssured}
                          alt='Flipkart assured'
                        />
                        <p className={styles.price}>
                          <span className={styles.currentPrice}>
                            ₹{elem.current_price}
                          </span>{' '}
                          <strike className={styles.originalPrice}>
                            ₹{elem.original_price}
                          </strike>
                          <span className={styles.discount}>
                            {discount}% off
                          </span>
                        </p>
                      </div>
                    </div>
                    <hr />
                  </div>
                );
              })}
            </div>
          </section>
        ) : (
          <section className={styles.orderSummary}>
            <p className={styles.sectionHeading}>
              <span className={styles.headingNumber}>3</span> ORDER SUMMARY
            </p>
          </section>
        )}
        {
          <section className={styles.paymentOptions}>
            <p className={styles.sectionHeading}>
              <span className={styles.headingNumber}>4</span>PAYMENT OPTIONS
            </p>
          </section>
        }
      </div>
      <div className={styles.priceDetailBox}>
        <CartSidebar cartData={products} />
      </div>
    </div>
  );
};

export default CheckoutPage;
