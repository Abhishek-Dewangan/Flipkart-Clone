import React, {useEffect} from 'react';
import styles from './CartPage.module.css';
import {useSelector, useDispatch} from 'react-redux';
import fAssured from '../../Assets/Images/f-assured.png';
import {Link, useNavigate} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import {removeFromCart} from '../../Services/Actions/CartAction';
import CartSidebar from './CartSidebar';

const CartPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.CartReducer);

  return (
    <div className={styles.cartPageContainer}>
      <section className={styles.leftSection}>
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
                        onClick={() => removeFromCart(dispatch, elem._id)}
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
        <CartSidebar />
      </section>
    </div>
  );
};

export default CartPage;
