// import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import {Routes, Route} from 'react-router-dom';
import LandingPage from './Pages/LandingPage/LandingPage';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<LandingPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
