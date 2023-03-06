import React from 'react';
import styles from './WishlistPage.module.css';
import {useDispatch, useSelector} from 'react-redux';

const WishlistPage = () => {
  const {user} = useSelector((state) => state.UserReducer);
  return (
    <div className={styles.wishlistContainer}>
      <section>
        <div>
          <img src='' alt='' />
          <div>
            <p>Hello,</p>
            <p>{user.first_name + " " + user.last_name}</p>
          </div>
        </div>
        <div></div>
      </section>
      <section></section>
    </div>
  );
};

export default WishlistPage;
