import axios from 'axios';

// Actions types
export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_PROUDUCT_DETAILS = 'GET_PROUDUCT_DETAILS';
export const GET_PRODUCTS_BY_ID = 'GET_PRODUCTS_BY_ID';
export const GET_PRODUCTS_BY_CATEGORY = 'GET_PRODUCTS_BY_CATEGORY';
export const IS_ERROR_IN_PRODUCT = 'IS_ERROR_IN_PRODUCT';
export const IS_LOADING_IN_PRODUCT = 'IS_LOADING_IN_PRODUCT';
export const FILTER_PRODUCTS = 'FILTER_PRODUCTS';
export const GET_TOP_OFFER_PRODUCTS = 'GET_TOP_OFFER_PRODUCTS';

// Get products
export const getPrducts = async (dispatch) => {
  dispatch({type: IS_LOADING_IN_PRODUCT});
  try {
    const products = await axios.get('http://localhost:8080/api/getproducts');
    // console.log(products.data);
    dispatch({type: GET_PRODUCTS, payload: products.data});
  } catch (error) {
    // console.log(error);
    dispatch({type: IS_ERROR_IN_PRODUCT, payload: error});
  }
};

//  Get products by category
export const getProductsByCategory = async (dispatch, category) => {
  dispatch({type: IS_LOADING_IN_PRODUCT});
  try {
    if (category === 'topoffers') {
      const products = await axios.get(
        `http://localhost:8080/api/getofferproducts`
      );
      // console.log(products);
      dispatch({type: GET_TOP_OFFER_PRODUCTS, payload: products.data});
    } else {
      const products = await axios.get(
        `http://localhost:8080/api/getproductsbycategory/${category}`
      );
      // console.log(products);
      dispatch({type: GET_PRODUCTS_BY_CATEGORY, payload: products.data});
    }
  } catch (error) {
    console.log(error);
    dispatch({type: IS_ERROR_IN_PRODUCT, payload: error});
  }
};

// Get product by id
export const getProductById = async (dispatch, id) => {
  dispatch({type: IS_LOADING_IN_PRODUCT});
  try {
    const product = await axios.get(
      `http:/localhost:8080/api/getproductbyid/${id}`
    );
    dispatch({type: GET_PRODUCTS_BY_ID, payload: product});
  } catch (error) {
    dispatch({type: IS_ERROR_IN_PRODUCT, payload: error.response.data});
  }
};

// Get prouduct details
export const getProductDetails = async (dispatch, product) => {
  dispatch({type: IS_LOADING_IN_PRODUCT});
  try {
    const res = await axios.get(product.query_url);
    console.log(res.data);
    if (!res.data.thumbnails.length) res.data.thumbnails = [product.thumbnail];
    dispatch({type: GET_PROUDUCT_DETAILS, payload: res});
  } catch (error) {
    // console.log(error);
    dispatch({type: IS_ERROR_IN_PRODUCT, payload: error});
  }
};

// Filter products
export const filterProducts = async (event, variables) => {
  const {name, value, checked} = event.target;
  const [sortby, setSortby, discount, setDiscount] = variables;
  // console.log(name, value, checked, sortby, discount);
  switch (name) {
    case 'sortby': {
      setSortby(value);
      break;
    }
    case 'discount': {
      checked
        ? setDiscount([...discount, +value])
        : setDiscount(discount.filter((elem) => elem !== +value));
      break;
    }
    default:
      break;
  }
};
