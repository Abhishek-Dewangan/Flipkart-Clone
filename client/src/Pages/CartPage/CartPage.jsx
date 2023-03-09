import React from 'react';
import styles from './CartPage.module.css';
import {useSelector} from 'react-redux';
import fAssured from '../../Assets/Images/f-assured.png';
import {Link, useNavigate} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import {removeFromCart} from '../../Services/Actions/CartAction';

const CartPage = () => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.CartReducer);

  return (
    <div className={styles.cartPageContainer}>
      <section className={styles.leftSection}>
        <h1>cartpage</h1>
        {cart.cartData.length &&
          cart.cartData.map((elem) => {
            // Calculating discount percent of products
            const discount = Math.floor(
              100 - (elem.current_price * 100) / elem.original_price
            );
            return (
              <div key={elem._id}>
                <div className={styles.productBox}>
                  <Link
                    to={`/productdetail/:${elem.productId}`}
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
                      to={`/productdetail/:${elem.productId}`}
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
                      <span className={styles.discount}>{discount}% off</span>
                    </p>
                    <div className={styles.btnDiv}>
                      <Button
                        variant='outline-danger'
                        onClick={() => removeFromCart(elem._id)}
                      >
                        Remove
                      </Button>
                      <Button
                        variant='outline-warning'
                        onClick={() =>
                          navigate(`'productdetail/:${elem.productId}`)
                        }
                      >
                        Buy this now
                      </Button>
                    </div>
                  </div>
                </div>
                <hr />
              </div>
            );
          })}
      </section>
      <section className={styles.rightSection}>
        <p className={styles.rightSecHeading}>PRICE DETAILS</p>
        <hr />
        <div>
          <p>Price ({cart.cartData.length} items)</p>
          <p>TOtal price</p>
        </div>
        <div>
          <p>Discount ({cart.cartData.length} items)</p>
          <p>TOtal Discount</p>
        </div>
        <div>
          <p>Delivery charget ({cart.cartData.length} items)</p>
          <p>TOtal Delivery charget</p>
        </div>
        <div>
          <p>Delivery charget ({cart.cartData.length} items)</p>
          <p>TOtal Delivery charget</p>
        </div>
      </section>
    </div>
  );
};

export default CartPage;
