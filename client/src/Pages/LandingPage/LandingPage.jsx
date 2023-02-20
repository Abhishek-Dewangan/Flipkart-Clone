import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getPrducts} from '../../Services/Actions/ProductAction';

const LandingPage = () => {
  const dispatch = useDispatch();
  const {products} = useSelector((state) => state.ProductReducer);
  useEffect(() => {
    getPrducts(dispatch);
  }, []);
  useEffect(() => {
    console.log(products);
  }, [products]);
  return <div>LandingPage</div>;
};

export default LandingPage;
