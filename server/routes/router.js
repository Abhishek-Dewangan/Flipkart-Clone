const express = require('express');
const {
  getAddress,
  addNewAddress,
  removeAddress,
} = require('../controllers/AddressController');
const {
  addToCart,
  removeFromCart,
  getCartProducts,
  removeAllFromCart,
} = require('../controllers/CartController');
const {
  getProduct,
  getProductById,
} = require('../controllers/ProductController');
const {
  signin,
  signup,
  signout,
  authentication,
} = require('../controllers/UserController');
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
router.post('/authentication', authentication);

// Product routes
router.get('/getproducts', getProduct);
router.get('/getproductbyid/:id', getProductById);

// Cart routes
router.get('/getcartproducts', getCartProducts);
router.post('/addtocart', addToCart);
router.delete('/removefromcart', removeFromCart);
router.delete('/removeallfromcart', removeAllFromCart);

// Wishlist routes
router.get('/getwishlistproducts', getWishlistProducts);
router.post('/addtowishlist', addToWishlist);
router.delete('/removefromwishlist', removeFromWishlist);
router.delete('/removeallfromwishlist', removeAllFromWishlist);

// Address routes
router.get('/getaddress', getAddress);
router.post('/addnewaddress', addNewAddress);
router.post('/removeaddress', removeAddress);
// Exporting router
module.exports = router;
