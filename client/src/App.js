// import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import {Routes, Route} from 'react-router-dom';
import LandingPage from './Pages/LandingPage/LandingPage';
import ProductCategoryPage from './Pages/ProductCategoryPage/ProductCategoryPage';
import CartPage from './Pages/CartPage/CartPage';
import ProductDetailsPage from './Pages/ProductDetailsPage/ProductDetailsPage';
import {useEffect, useState} from 'react';
import {getPrducts} from './Services/Actions/ProductAction';
import {useDispatch, useSelector} from 'react-redux';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';
import {getWishlistProducts} from './Services/Actions/WishlistAction';
import {getCartProducts} from './Services/Actions/CartAction';

function App() {
  const dispatch = useDispatch();
  const [showSignin, setShowSignin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const {user} = useSelector((state) => state.UserReducer);

  const handleCloseSignin = () => setShowSignin(false);
  const handleShowSignin = () => setShowSignin(true);
  const handleCloseSignup = () => setShowSignup(false);
  const handleShowSignup = () => setShowSignup(true);

  useEffect(() => {
    getPrducts(dispatch);
    getWishlistProducts(dispatch, user.userId);
    getCartProducts(dispatch, user.userId);
  }, []);
  return (
    <div className='App'>
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
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/category/:category' element={<ProductCategoryPage />} />
        <Route path='/cart' element={<CartPage />} />
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
