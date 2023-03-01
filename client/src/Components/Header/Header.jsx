import React, {useState} from 'react';
import styles from './Header.module.css';
import {Link} from 'react-router-dom';
import {BiChevronDown, BiChevronUp} from 'react-icons/bi';
import {FaShoppingCart, FaSearch} from 'react-icons/fa';
import logo from '../../Assets/Images/flipkart-logo.png';

const Header = ({handleShowSignin}) => {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <section className={styles.left}>
        <Link to={'/'} className={styles.link}>
          <img className={styles.logo} src={logo} alt='Flipkart logo' />
        </Link>
        <div className={styles.searchBar}>
          <input
            type={'text'}
            name={'searchBar'}
            placeholder={'Search for products, brand and more'}
          />
          <FaSearch className={styles.searchIcon} />
        </div>
        <button className={styles.loginBtn} onClick={handleShowSignin}>
          Login
        </button>
      </section>
      <section className={styles.right}>
        <Link className={styles.link}>Become a Seller</Link>
        <Link
          className={styles.link}
          onMouseEnter={() => setOpen(!open)}
          onMouseLeave={() => setOpen(!open)}
        >
          <div className={styles.more}>
            More
            <label className={styles.openCloseIcon}>
              {open ? <BiChevronUp /> : <BiChevronDown />}
            </label>
          </div>
        </Link>
        <Link to={'/cart'} className={styles.link}>
          <div className={styles.cart}>
            <FaShoppingCart className={styles.cartIcon} /> Cart
          </div>
        </Link>
      </section>
    </nav>
  );
};

export default Header;
