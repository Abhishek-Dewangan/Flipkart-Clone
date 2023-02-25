// import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import {Routes, Route} from 'react-router-dom';
import LandingPage from './Pages/LandingPage/LandingPage';
import ProductCategoryPage from './Pages/ProductCategoryPage/ProductCategoryPage';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/category/:category' element={<ProductCategoryPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
