import React from 'react';
import styles from './WishlistPage.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {signout} from '../../Services/Actions/UserAction';
import {CgProfile} from 'react-icons/cg';
import {BsFillArrowUpCircleFill} from 'react-icons/bs';
import {FaShoppingCart} from 'react-icons/fa';
import {BiLogOutCircle} from 'react-icons/bi';

const WishlistPage = () => {
  const dispatch = useDispatch();
  const {user} = useSelector((state) => state.UserReducer);
  const wishlist = useSelector((state) => state.WishlistReducer);
  return (
    <div className={styles.wishlistContainer}>
      <section className={styles.leftSection}>
        <div className={styles.profile}>
          <CgProfile className={styles.profileIcon} size={50} />
          <div className={styles.profileDetails}>
            <p className={styles.greet}>Hello,</p>
            <p>{user.first_name + ' ' + user.last_name}</p>
          </div>
        </div>
        <div className={styles.otherLinks}>
          <div>
            <Link className={styles.link} to={'/myorders'}>
              <BsFillArrowUpCircleFill className={styles.orderIcon} /> MY ORDERS
            </Link>
          </div>
          <hr />
          <div>
            <Link className={styles.link} to={'/cart'}>
              <FaShoppingCart className={styles.cartIcon} /> MY CART
            </Link>
          </div>
          <hr />
          <div>
            <Link className={styles.link} onClick={() => signout(dispatch, user.token)}>
              <BiLogOutCircle className={styles.logoutIcon} /> LOGOUT
            </Link>
          </div>
        </div>
      </section>
      <section className={styles.rightSection}></section>
    </div>
  );
};

export default WishlistPage;
