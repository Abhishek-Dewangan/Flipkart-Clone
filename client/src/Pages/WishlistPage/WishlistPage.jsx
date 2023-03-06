import React from 'react';
import styles from './WishlistPage.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

const WishlistPage = () => {
  const {user} = useSelector((state) => state.UserReducer);
  return (
    <div className={styles.wishlistContainer}>
      <section>
        <div>
          <img src='' alt='' />
          <div>
            <p>Hello,</p>
            <p>{user.first_name + ' ' + user.last_name}</p>
          </div>
        </div>
        <div>
          <Link to={'/myorders'}>MY ORDERS</Link>
          <hr />
          <Link to={'/cart'}>MY CART</Link>
          <hr />
        </div>
      </section>
      <section></section>
    </div>
  );
};

export default WishlistPage;
