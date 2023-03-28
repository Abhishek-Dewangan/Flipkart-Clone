import React, {useEffect} from 'react';
import styles from './MyOrdersPage.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {Link, useNavigate} from 'react-router-dom';
import {MdDelete, MdCircle} from 'react-icons/md';
import fAssured from '../../Assets/Images/f-assured.png';
import emptyImage from '../../Assets/Images/empty.png';
import {Button} from 'react-bootstrap';

const MyOrdersPage = ({handleShowSignin}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const order = useSelector((state) => state.OrderReducer);
  const {user} = useSelector((state) => state.UserReducer);

  return user.userId ? (
    <div className={styles.myOrderContainer}>
      <h5 className={styles.heading}>My Orders ({order.ordersData.length})</h5>
      <hr />
      {order.ordersData.length ? (
        order.ordersData.map((elem) => {
          // Calculating discount percent of products
          const discount = Math.floor(
            100 - (elem.current_price * 100) / elem.original_price
          );
          const date = elem.date.split(' ');
          return (
            <div key={elem._id} className={styles.productContainer}>
              <div className={styles.productBox}>
                <div>
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
                </div>
                <div>
                  <Link
                    to={`/productdetail/${elem.productId}`}
                    className={styles.productTitle}
                  >
                    <span className={styles.productName}>{elem.name}</span>
                  </Link>
                  <img
                    className={styles.fAssured}
                    src={fAssured}
                    alt='Flipkart assured'
                  />
                </div>
                <div>
                  <p className={styles.price}>
                    <span className={styles.currentPrice}>
                      ₹{elem.current_price}
                    </span>
                  </p>
                </div>
                <div>
                  <p className={styles.orderedAt}>
                    <MdCircle color='#26a541' size={11} /> Ordered on{' '}
                    {date[1] + ' ' + date[2]}
                  </p>
                </div>
              </div>
              <hr />
            </div>
          );
        })
      ) : (
        <div className={styles.emptyOrder}>
          <img src={emptyImage} alt='Empty Item' />
          <h4>Empty order</h4>
          <p>You have not ordered anything yet. Start ordering!</p>
          <Button onClick={() => navigate('/')}>Start Shopping</Button>
        </div>
      )}
    </div>
  ) : (
    <div className={styles.myOrderContainer}>
      <div className={styles.emptyOrder}>
        <img src={emptyImage} alt='Empty Item' />
        <h4>Missing your orders?</h4>
        <p>Login to see the items you ordered previously</p>
        <button className={styles.loginBtn} onClick={() => handleShowSignin()}>
          Login
        </button>
      </div>
    </div>
  );
};

export default MyOrdersPage;
