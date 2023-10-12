import { Button, Dropdown, Offcanvas } from 'react-bootstrap';
import { AiOutlineMenu } from 'react-icons/ai';
import styles from './MobileHeader.module.css';
import { useEffect, useState } from 'react';
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
import { signout } from '../../Services/Actions/UserAction';
import { refreshAddress } from '../../Services/Actions/AddressAction';
import { refreshCart } from '../../Services/Actions/CartAction';
import { refreshWishlist } from '../../Services/Actions/WishlistAction';
import { refreshOreders } from '../../Services/Actions/OrderAction';

export const MobileHeader = ({ handleShowSignin }) => {
  const [show, setShow] = useState(false);
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

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <Button
        // variant='primary'
        className={styles.menuIcon}
        onClick={handleShow}>
        <AiOutlineMenu />
      </Button>

      <Offcanvas
        class='w-3'
        className={styles.sidebarBody}
        offcanvas-vertical-height='30vh'
        placement='end'
        show={show}
        style={{ width: '300px' }}
        onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            {user.first_name && user.first_name + ' ' + user.last_name}
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {user.first_name ? (
            <div></div>
          ) : (
              <div
                className={styles.buttons}
                onClick={handleShowSignin}>
                Login
              </div>
          )}
          <div>
            <div
              className={styles.buttons}
              onClick={() => {
                handleClose();
                navigate('/wishlist');
              }}>
              <FaHeart className={styles.wishlistIcon} /> Wishlist
            </div>
            <div
              className={styles.buttons}
              onClick={() => {
                handleClose();
                navigate('/myorders');
              }}>
              <FaArrowCircleUp className={styles.orderIcon} /> Orders
            </div>
            <div
              className={styles.buttons}
              onClick={() => {
                signout(distpatch, user.token);
                refreshAddress(distpatch);
                refreshCart(distpatch);
                refreshWishlist(distpatch);
                refreshOreders(distpatch);
                handleClose();
              }}>
              <BiLogOutCircle className={styles.signoutIcon} /> SignOut
            </div>
          </div>
          <div
            className={styles.buttons}
            onClick={() => {
              handleClose();
              navigate('/cart');
            }}>
            <div className={styles.cart}>
              <p className={styles.cartItemCount}>{cart.cartData.length}</p>
              <FaShoppingCart className={styles.cartIcon} /> Cart
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

// <Link
//   className={styles.link}
//   to={
//     'https://seller.flipkart.com/sell-online/?utm_source=fkwebsite&utm_medium=websitedirect'
//   }
//   target={'_blank'}>
//   Become a Seller
// </Link>
// <Dropdown
//   className={styles.dropdown}
//   id={'dropdown-drop-down-centered'}
//   drop={'down-centered'}
//   onMouseEnter={() => setShowMore(true)}
//   onMouseLeave={() => setShowMore(false)}>
//   <Dropdown.Toggle
//     className={styles.dropdownToggle}
//     as={'div'}>
//     More
//   </Dropdown.Toggle>
//   <Dropdown.Menu
//     show={showMore}
//     as={'div'}
//     className={styles.dropdownMenu}>
//     <Dropdown.ItemText>Download App</Dropdown.ItemText>
//     <Dropdown.Item
//       as={'a'}
//       href='https://apps.apple.com/in/app/flipkart/id742044692'
//       target={'_blank'}
//       className={styles.menuItem}>
//       <GrApple className={styles.wishlistIcon} /> Apple Store
//     </Dropdown.Item>
//     <hr className={styles.hrLine} />
//     <Dropdown.Item
//       as={'a'}
//       href='https://play.google.com/store/apps/details?id=com.flipkart.android'
//       target={'_blank'}
//       className={styles.menuItem}>
//       <FaGooglePlay className={styles.orderIcon} /> Google Play
//     </Dropdown.Item>
//   </Dropdown.Menu>
// </Dropdown>
// <Dropdown
//   className={styles.dropdown}
//   id={'dropdown-drop-down-centered'}
//   drop={'down-centered'}
//   onMouseEnter={() => setShowUser(true)}
//   onMouseLeave={() => setShowUser(false)}>
//   <Dropdown.Toggle
//     className={styles.dropdownToggle}
//     as={'div'}>
//     {user.first_name}
//   </Dropdown.Toggle>
//   <Dropdown.Menu
//     show={showUser}
//     as={'div'}
//     className={styles.dropdownMenu}>
//     <Dropdown.Item
//       onClick={() => navigate('/wishlist')}
//       className={styles.menuItem}>
//       <FaHeart className={styles.wishlistIcon} /> Wishlist
//     </Dropdown.Item>
//     <hr className={styles.hrLine} />
//     <Dropdown.Item
//       onClick={() => navigate('/myorders')}
//       className={styles.menuItem}>
//       <FaArrowCircleUp className={styles.orderIcon} /> Orders
//     </Dropdown.Item>
//     <hr className={styles.hrLine} />
//     <Dropdown.Item
//       onClick={() => {
//         signout(distpatch, user.token);
//         refreshAddress(distpatch);
//         refreshCart(distpatch);
//         refreshWishlist(distpatch);
//         refreshOreders(distpatch);
//       }}
//       className={styles.menuItem}>
//       <BiLogOutCircle className={styles.signoutIcon} /> SignOut
//     </Dropdown.Item>
//   </Dropdown.Menu>
// </Dropdown>
