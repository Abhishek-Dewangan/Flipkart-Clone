import {
  addToCart,
  removeMultiplefromCart,
} from "../Services/Actions/CartAction";
import { addOrder } from "../Services/Actions/OrderAction";
import { toast } from "react-toastify";
import {
  addToWishlist,
  removeFromWishlist,
} from "../Services/Actions/WishlistAction";

//  Adding product into cart
export const addCart = (dispatch, elem, user) => {
  if (!user.userId) return toast.error("Please login first");
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

// Removing multiple products from cart
export const removeProductsFromCart = (dispatch, products, userId) => {
  let productsId = products.map((elem) =>
    elem.productId ? elem.productId : elem._id
  );
  removeMultiplefromCart(dispatch, productsId, userId);
};

// Adding product into wishlist
export const addWishlist = (dispatch, elem, user) => {
  if (!user.userId) return toast.error("Please login first");
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
export const addOrders = (dispatch, data, userId) => {
  const orderProducts = data.map((elem) => {
    const date = new Date();
    return {
      userId: userId,
      productId: elem._id,
      name: elem.name,
      category: elem.category,
      link: elem.link,
      current_price: elem.current_price,
      original_price: elem.original_price,
      discounted: elem.discounted,
      thumbnail: elem.thumbnail,
      query_url: elem.query_url,
      date: `${date}`,
    };
  });
  addOrder(dispatch, orderProducts);
};

// Buy Now fuction
export const buyNow = (products, navigate) => {
  localStorage.setItem("checkout", JSON.stringify(products));
  navigate("/checkout");
};
