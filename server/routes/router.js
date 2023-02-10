const express = require('express');
const {
  addToCart,
  removeFromCart,
  getCartProducts,
} = require('../controllers/CartController');
const {
  getProduct,
  getProductById,
} = require('../controllers/ProductController');
const {signin, signup, signout} = require('../controllers/UserController');
const {
  addToWishlist,
  removeFromWishlist,
  getWishlistProducts,
  removeAllFromWishlist,
} = require('../controllers/WishlistController');

const router = express.Router();

// User routes
router.post('/signup', signup);
router.post('/signin', signin);
router.post('/signout', signout);

// Product routes
router.get('/getproducts', getProduct);
router.get('getproductbyid/:id', getProductById);

// Cart routes
router.get('getcartproducts', getCartProducts);
router.post('addtocart', addToCart);
router.delete('removefromcart', removeFromCart);

// Wishlist routes
router.get('getwishlistproducts', getWishlistProducts);
router.post('addtowishlist', addToWishlist);
router.delete('removefromwishlist', removeFromWishlist);
router.delete('removeallfromwishlist',removeAllFromWishlist);

// Exporting router
module.exports = router;
