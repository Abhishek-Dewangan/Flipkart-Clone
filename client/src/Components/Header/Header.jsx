import React, {useState} from 'react';
import styles from './Header.module.css';
import {Link} from 'react-router-dom';
import {SiFlipkart} from 'react-icons/si';
import {BiSearch, BiChevronDown, BiChevronUp} from 'react-icons/bi';
import {FaShoppingCart} from 'react-icons/fa';

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className={styles.navbar}>
      <section className={styles.left}>
        <Link className={styles.link}>
          <SiFlipkart className={styles.flipkartIcon} />
        </Link>
        <div className={styles.searchBar}>
          <input
            type={'text'}
            name={'searchBar'}
            placeholder={'Search for products, brand and more'}
          />
          <BiSearch className={styles.searchIcon} />
        </div>
        <button className={styles.loginBtn}>Login</button>
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
        <Link className={styles.link}>
          <div className={styles.cart}>
            <FaShoppingCart className={styles.cartIcon} /> Cart
          </div>
        </Link>
      </section>
    </nav>
  );
};

export default Header;
