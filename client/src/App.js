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
import {useDispatch} from 'react-redux';
import SignIn from './Components/SignIn/SignIn';

function App() {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    getPrducts(dispatch);
  }, []);
  return (
    <div className='App'>
      <Header setShow={setShow} handleShow={handleShow} />
      <SignIn show={show} handleClose={handleClose} handleShow={handleShow} />
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
