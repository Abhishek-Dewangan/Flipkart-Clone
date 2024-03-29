import { useEffect, useState } from 'react';
import styles from './Header.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { BiLogOutCircle } from 'react-icons/bi';
import { GrApple } from 'react-icons/gr';
import {
  FaShoppingCart,
  FaSearch,
  FaHeart,
  FaArrowCircleUp,
  FaGooglePlay,
} from 'react-icons/fa';
import logo from '../../Assets/Images/flipkart-logo.png';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Dropdown } from 'react-bootstrap';
import { signout } from '../../Services/Actions/UserAction';
import { refreshAddress } from '../../Services/Actions/AddressAction';
import { refreshCart } from '../../Services/Actions/CartAction';
import { refreshWishlist } from '../../Services/Actions/WishlistAction';
import { refreshOreders } from '../../Services/Actions/OrderAction';
import { MobileHeader } from '../MobileHeader/MobileHeader';

const Header = ({ handleShowSignin }) => {
  const distpatch = useDispatch();
  const navigate = useNavigate();
  const [showUser, setShowUser] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [status, setStatus] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const cart = useSelector((state) => state.CartReducer);
  const {
    user,
    signinSuccess,
    signupSuccess,
    signoutSuccess,
    isError,
    message,
  } = useSelector((state) => state.UserReducer);

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
      <section className={styles.left}>
        <Link
          to={'/'}
          className={styles.link}>
          <img
            className={styles.logo}
            src={logo}
            alt='Flipkart logo'
          />
        </Link>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            e.target.search.value &&
              navigate(`/products/${e.target.search.value}`);
          }}
          className={styles.searchBar}>
          <input
            type={'text'}
            name={'search'}
            placeholder={'Search for products, brand and more'}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <FaSearch
            onClick={() => searchValue && navigate(`/products/${searchValue}`)}
            className={styles.searchIcon}
          />
        </form>
      </section>
      <section className={styles.right}>
        {user.first_name ? (
          <Dropdown
            className={styles.dropdown}
            id={'dropdown-drop-down-centered'}
            drop={'down-centered'}
            onMouseEnter={() => setShowUser(true)}
            onMouseLeave={() => setShowUser(false)}>
            <Dropdown.Toggle
              className={styles.dropdownToggle}
              as={'div'}>
              {user.first_name}
            </Dropdown.Toggle>
            <Dropdown.Menu
              show={showUser}
              as={'div'}
              className={styles.dropdownMenu}>
              <Dropdown.Item
                onClick={() => navigate('/wishlist')}
                className={styles.menuItem}>
                <FaHeart className={styles.wishlistIcon} /> Wishlist
              </Dropdown.Item>
              <hr className={styles.hrLine} />
              <Dropdown.Item
                onClick={() => navigate('/myorders')}
                className={styles.menuItem}>
                <FaArrowCircleUp className={styles.orderIcon} /> Orders
              </Dropdown.Item>
              <hr className={styles.hrLine} />
              <Dropdown.Item
                onClick={() => {
                  signout(distpatch, user.token);
                  refreshAddress(distpatch);
                  refreshCart(distpatch);
                  refreshWishlist(distpatch);
                  refreshOreders(distpatch);
                }}
                className={styles.menuItem}>
                <BiLogOutCircle className={styles.signoutIcon} /> SignOut
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        ) : (
          <button
            className={styles.loginBtn}
            onClick={handleShowSignin}>
            Login
          </button>
        )}
        <Link
          className={styles.link}
          to={
            'https://seller.flipkart.com/sell-online/?utm_source=fkwebsite&utm_medium=websitedirect'
          }
          target={'_blank'}>
          Become a Seller
        </Link>
        <Dropdown
          className={styles.dropdown}
          id={'dropdown-drop-down-centered'}
          drop={'down-centered'}
          onMouseEnter={() => setShowMore(true)}
          onMouseLeave={() => setShowMore(false)}>
          <Dropdown.Toggle
            className={styles.dropdownToggle}
            as={'div'}>
            More
          </Dropdown.Toggle>
          <Dropdown.Menu
            show={showMore}
            as={'div'}
            className={styles.dropdownMenu}>
            <Dropdown.ItemText>Download App</Dropdown.ItemText>
            <Dropdown.Item
              as={'a'}
              href='https://apps.apple.com/in/app/flipkart/id742044692'
              target={'_blank'}
              className={styles.menuItem}>
              <GrApple className={styles.wishlistIcon} /> Apple Store
            </Dropdown.Item>
            <hr className={styles.hrLine} />
            <Dropdown.Item
              as={'a'}
              href='https://play.google.com/store/apps/details?id=com.flipkart.android'
              target={'_blank'}
              className={styles.menuItem}>
              <FaGooglePlay className={styles.orderIcon} /> Google Play
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Link
          to={'/cart'}
          className={styles.link}>
          <div className={styles.cart}>
            <p className={styles.cartItemCount}>{cart.cartData.length}</p>
            <FaShoppingCart className={styles.cartIcon} /> Cart
          </div>
        </Link>
      </section>
      <section className={styles.menu}>
        <MobileHeader handleShowSignin={handleShowSignin} />
      </section>
    </nav>
  );
};

export default Header;
