import React, {useState} from 'react';
import styles from './Header.module.css';
import {Link} from 'react-router-dom';
import {SiFlipkart} from 'react-icons/si';
import {BiSearch, BiChevronDown, BiChevronUp} from 'react-icons/bi';

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className={styles.navbar}>
      <SiFlipkart className={styles.flipkartIcon} />
      <div className={styles.searchBar}>
        <input
          type={'text'}
          name={'searchBar'}
          placeholder={'Search for products, brand and more'}
        />
        <BiSearch color='#2455f4' />
      </div>
      <button>Login</button>
      <Link>Become a Seller</Link>
      <Link
        onMouseEnter={() => setOpen(!open)}
        onMouseDown={() => setOpen(!open)}
      >
        More {open ? <BiChevronUp /> : <BiChevronDown />}
      </Link>
    </nav>
  );
};

export default Header;
