import styles from'./App.module.css';
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

function App() {
  const dispatch = useDispatch();
  const [showSignin, setShowSignin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const {user} = useSelector((state) => state.UserReducer);

  const handleCloseSignin = () => setShowSignin(false);
  const handleShowSignin = () => setShowSignin(true);
  const handleCloseSignup = () => setShowSignup(false);
  const handleShowSignup = () => setShowSignup(true);

  // Calling getProduct fuction to store all product in redux store on first render
  useEffect(() => {
    getPrducts(dispatch);
  }, []);

  // On user changing calling getWishlist and getCart product function
  useEffect(() => {
    user.userId && getWishlistProducts(dispatch, user.userId);
    user.userId && getCartProducts(dispatch, user.userId);
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
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
