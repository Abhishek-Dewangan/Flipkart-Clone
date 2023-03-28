import React, {useEffect} from 'react';
import styles from './CartPage.module.css';
import {useSelector, useDispatch} from 'react-redux';
import fAssured from '../../Assets/Images/f-assured.png';
import emptyImage from '../../Assets/Images/empty.png';
import {Link, useNavigate} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import {removeFromCart} from '../../Services/Actions/CartAction';
import CartSidebar from './CartSidebar';
import {buyNow} from '../../Assets/ReusableFuctions';

const CartPage = ({handleShowSignin}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.CartReducer);
  const user = useSelector((state) => state.UserReducer);

  return user.user.userId ? (
    <div className={styles.cartPageContainer}>
      <section className={styles.leftSection}>
        {cart.cartData.length ? (
          <div>
            <h5 className={styles.leftSecHeading}>
              My Cart({cart.cartData.length})
            </h5>
            <hr />
          </div>
        ) : (
          ''
        )}
        <div className={styles.cartData}>
          {cart.cartData.length ? (
            cart.cartData.map((elem) => {
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
                          onClick={() => buyNow([elem], navigate)}
                        >
                          Buy this now
                        </Button>
                      </div>
                    </div>
                  </div>
                  <hr />
                </div>
              );
            })
          ) : (
            <div className={styles.emptyCart}>
              <img src={emptyImage} alt='Empty Item' />
              <h4>Your cart is empty!</h4>
              <p>Add items to it now!</p>
              <Button onClick={() => navigate('/')}>Shop now</Button>
            </div>
          )}
        </div>
      </section>
      <section className={styles.rightSection}>
        <CartSidebar cartData={cart.cartData} />
        <div className={styles.placeOrder}>
          <Button
            className={styles.placeOrderBtn}
            onClick={() => buyNow(cart.cartData, navigate)}
          >
            PLACE ORDER
          </Button>
        </div>
      </section>
    </div>
  ) : (
    <div className={styles.cartPageContainer}>
      <div className={styles.emptyCart}>
        <img src={emptyImage} alt='Empty Item' />
        <h4>Missing Cart items?</h4>
        <p>Login to see teh items you added previously</p>
        <button className={styles.loginBtn} onClick={() => handleShowSignin()}>
          Login
        </button>
      </div>
    </div>
  );
};

export default CartPage;
