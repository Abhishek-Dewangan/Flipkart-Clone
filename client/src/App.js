import styles from './App.module.css';
import {useEffect, useState} from 'react';
import {Routes, Route} from 'react-router-dom';
import {getPrducts} from './Services/Actions/ProductAction';
import {useDispatch, useSelector} from 'react-redux';
import {getWishlistProducts} from './Services/Actions/WishlistAction';
import {getCartProducts} from './Services/Actions/CartAction';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';
import LandingPage from './Pages/LandingPage/LandingPage';
import ProductCategoryPage from './Pages/ProductCategoryPage/ProductCategoryPage';
import CartPage from './Pages/CartPage/CartPage';
import WishlistPage from './Pages/WishlistPage/WishlistPage';
import ProductDetailsPage from './Pages/ProductDetailsPage/ProductDetailsPage';
import MyOrdersPage from './Pages/MyOrdersPage/MyOrdersPage';
import {toast} from 'react-toastify';
import CheckoutPage from './Pages/CheckoutPage/CheckoutPage';
import {getAddress} from './Services/Actions/AddressAction';
import AddressForm from './Components/AddressForm/AddressForm';
import EditAddress from './Components/EditAddress/EditAddress';

function App() {
  const dispatch = useDispatch();
  const [showSignin, setShowSignin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showAddress, setShowAddress] = useState(false);
  const [showEditAddress, setShowEditAdress] = useState(false);
  const {user, signoutSuccess} = useSelector((state) => state.UserReducer);
  const wishlist = useSelector((state) => state.WishlistReducer);
  const cart = useSelector((state) => state.CartReducer);

  const handleCloseSignin = () => setShowSignin(false);
  const handleShowSignin = () => setShowSignin(true);
  const handleCloseSignup = () => setShowSignup(false);
  const handleShowSignup = () => setShowSignup(true);
  const handleCloseAddress = () => setShowAddress(false);
  const handleShowAddress = () => setShowAddress(true);
  const handleCloseEditAddress = () => setShowEditAdress(false);
  const handleShowEditAddress = () => setShowEditAdress(true);

  // Alert messages for wihslist actions
  const alertWishlist = () => {
    wishlist.isSuccess && toast.success(wishlist.message);
    wishlist.isError && toast.error(wishlist.message);
  };

  // Alert message for cart actions
  const alertCart = () => {
    cart.isSuccess && toast.success(cart.message);
    cart.isError && toast.error(cart.message);
  };

  useEffect(() => {
    wishlist.message && alertWishlist();
  }, [wishlist.message]);

  useEffect(() => {
    cart.message && alertCart();
  }, [cart.message]);

  // Calling getProduct fuction to store all product in redux store on first render
  useEffect(() => {
    getPrducts(dispatch);
  }, []);

  // On user changing calling getWishlist and getCart product function
  useEffect(() => {
    user.userId && getWishlistProducts(dispatch, user.userId);
    user.userId && getCartProducts(dispatch, user.userId);
    user.userId && getAddress(dispatch, user.userId);
  }, [user]);

  return (
    <div className={styles.app}>
      <Header handleShowSignin={handleShowSignin} />
      <SignIn
        show={showSignin}
        handleCloseSignin={handleCloseSignin}
        handleShowSignup={handleShowSignup}
      />
      <SignUp
        show={showSignup}
        handleCloseSignup={handleCloseSignup}
        handleShowSignin={handleShowSignin}
      />
      <AddressForm show={showAddress} handleCloseAddress={handleCloseAddress} />
      <EditAddress
        show={showEditAddress}
        handleCloseEditAddress={handleCloseEditAddress}
      />
      <Routes className={styles.routes}>
        <Route path='/' element={<LandingPage />} />
        <Route path='/category/:category' element={<ProductCategoryPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/wishlist' element={<WishlistPage />} />
        <Route path='/myorders' element={<MyOrdersPage />} />
        <Route
          path='/productdetail/:productid'
          element={<ProductDetailsPage />}
        />
        <Route
          path='/checkout'
          element={
            <CheckoutPage
              handleShowAddress={handleShowAddress}
              handleShowEditAddress={handleShowEditAddress}
            />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
