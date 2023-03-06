import React, {useEffect, useState} from 'react';
import styles from './Header.module.css';
import {Link, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {BiChevronDown, BiChevronUp, BiLogOutCircle} from 'react-icons/bi';
import {
  FaShoppingCart,
  FaSearch,
  FaHeart,
  FaArrowCircleUp,
} from 'react-icons/fa';
import logo from '../../Assets/Images/flipkart-logo.png';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Dropdown} from 'react-bootstrap';
import {signout} from '../../Services/Actions/UserAction';

const Header = ({handleShowSignin}) => {
  const distpatch = useDispatch();
  const navigate = useNavigate()
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const {user, signinSuccess, signupSuccess, signoutSuccess, isError, message} =
    useSelector((state) => state.UserReducer);

  const alertMessage = () => {
    (signinSuccess || signupSuccess || signoutSuccess) &&
      toast.success(message);

    isError && toast.error(message);
  };

  useEffect(() => {
    message && alertMessage();
  }, [message]);

  return (
    <nav className={styles.navbar}>
      <ToastContainer />
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
        {user.first_name ? (
          <Dropdown
            className={styles.dropdown}
            id={'dropdown-drop-down-centered'}
            drop={'down-centered'}
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
          >
            <Dropdown.Toggle className={styles.dropdownToggle}>
              {user.first_name}
            </Dropdown.Toggle>
            <Dropdown.Menu show={show} className={styles.dropdownMenu}>
              <Dropdown.Item onClick={()=>navigate('/wishlist')}>
                <FaHeart /> Wishlist
              </Dropdown.Item>
              <Dropdown.Item onClick={()=>navigate('/myorders')}>
                <FaArrowCircleUp /> Orders
              </Dropdown.Item>
              <Dropdown.Item onClick={() => signout(distpatch, user.token)}>
                <BiLogOutCircle className={styles.signoutIcon} /> SignOut
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        ) : (
          <button className={styles.loginBtn} onClick={handleShowSignin}>
            Login
          </button>
        )}
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
