const express = require('express');
const {addToCart, removeFromCart} = require('../controllers/CartController');
const {
  getProduct,
  getProductById,
} = require('../controllers/ProductController');
const {signin, signup, signout} = require('../controllers/UserController');

const router = express.Router();

// User routes
router.post('/signup', signup);
router.post('/signin', signin);
router.post('/signout', signout);

// Product routes
router.get('/getproducts', getProduct);
router.get('getproductbyid/:id', getProductById);

// Cart routes
router.post('addtocart', addToCart);
router.delete('removefromcart', removeFromCart);

// Exporting router
module.exports = router;
