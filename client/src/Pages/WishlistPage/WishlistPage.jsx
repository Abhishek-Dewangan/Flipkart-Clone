import React from 'react';
import styles from './WishlistPage.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {signout} from '../../Services/Actions/UserAction';
import fAssured from '../../Assets/Images/f-assured.png';
import {CgProfile} from 'react-icons/cg';
import {BsFillArrowUpCircleFill} from 'react-icons/bs';
import {FaShoppingCart} from 'react-icons/fa';
import {BiLogOutCircle} from 'react-icons/bi';
import {GrNext} from 'react-icons/gr';
import {MdDelete} from 'react-icons/md';
import {removeFromWishlist} from '../../Services/Actions/WishlistAction';

const WishlistPage = () => {
  const dispatch = useDispatch();
  const {user} = useSelector((state) => state.UserReducer);
  const wishlist = useSelector((state) => state.WishlistReducer);

  const alertMessage = () => {}

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
          <div className={styles.linksDiv}>
            <Link className={styles.link} to={'/myorders'}>
              <BsFillArrowUpCircleFill className={styles.orderIcon} /> MY ORDERS{' '}
              <GrNext className={styles.nextIcon} />
            </Link>
          </div>
          <hr />
          <div className={styles.linksDiv}>
            <Link className={styles.link} to={'/cart'}>
              <FaShoppingCart className={styles.cartIcon} /> MY CART{' '}
              <GrNext className={styles.nextIcon} />
            </Link>
          </div>
          <hr />
          <div className={styles.linksDiv}>
            <Link
              className={styles.link}
              onClick={() => signout(dispatch, user.token)}
            >
              <BiLogOutCircle className={styles.logoutIcon} /> LOGOUT
            </Link>
          </div>
        </div>
      </section>
      <section className={styles.rightSection}>
        <h5 className={styles.heading}>
          My Wishlist ({wishlist.wishlistData.length})
        </h5>
        <hr />
        {wishlist.wishlistData.length ? (
          wishlist.wishlistData.map((elem) => {
            // Calculating discount percent of products
            const discount = Math.floor(
              100 - (elem.current_price * 100) / elem.original_price
            );
            return (
              <div key={elem._id}>
                <div className={styles.productBox}>
                  <div className={styles.imgDiv}>
                    <img
                      src={elem.thumbnail}
                      alt={elem.name}
                      className={styles.productImage}
                    />
                  </div>
                  <div className={styles.productDetails}>
                    <span className={styles.productNmae}>{elem.name}</span>
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
                  </div>
                  <MdDelete
                    title='Remove'
                    className={styles.deleteIcon}
                    onClick={() => removeFromWishlist(dispatch, elem._id)}
                  />
                </div>
                <hr />
              </div>
            );
          })
        ) : (
          <h1>Your wishlist data is empty</h1>
        )}
      </section>
    </div>
  );
};

export default WishlistPage;
