import {addToCart} from '../Services/Actions/CartAction';
import {
  addToWishlist,
  removeFromWishlist,
} from '../Services/Actions/WishlistAction';
import {addOrder} from '../Services/Actions/OrderAction';

//  Adding product into cart
export const addCart = (dispatch, elem, user) => {
  const product = {
    userId: user.userId,
    productId: elem._id,
    name: elem.name,
    category: elem.category,
    link: elem.link,
    current_price: elem.current_price,
    original_price: elem.original_price,
    discounted: elem.discounted,
    thumbnail: elem.thumbnail,
    query_url: elem.query_url,
  };
  addToCart(dispatch, product);
};

// Adding product into wishlist
export const addWishlist = (dispatch, elem, user) => {
  const product = {
    userId: user.userId,
    productId: elem._id,
    name: elem.name,
    category: elem.category,
    link: elem.link,
    current_price: elem.current_price,
    original_price: elem.original_price,
    discounted: elem.discounted,
    thumbnail: elem.thumbnail,
    query_url: elem.query_url,
  };
  addToWishlist(dispatch, product);
};

// Removing product from wishlist
export const removeWishlist = (dispatch, id) => {
  removeFromWishlist(dispatch, id);
};

// Add orders while ordering products
export const addOrders = (dispatch, data) => {
  // console.log(data);
  const orderProducts = data.map((elem) => {
    return {
      userId: elem.userId,
      productId: elem._id,
      name: elem.name,
      category: elem.category,
      link: elem.link,
      current_price: elem.current_price,
      original_price: elem.original_price,
      discounted: elem.discounted,
      thumbnail: elem.thumbnail,
      query_url: elem.query_url,
    };
  });
  // console.log(orderProducts);
  addOrder(dispatch, orderProducts);
};

// Buy Now fuction
export const buyNow = (products, navigate) => {
  localStorage.setItem('checkout', JSON.stringify(products));
  navigate('/checkout');
};
