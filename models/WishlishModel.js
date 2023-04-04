const mongoose = require('mongoose');

// Wishlist Schema
const Wishlist = new mongoose.Schema({
  userId: {type: String, required: true},
  productId: {type: String, required: true},
  name: {type: String, required: true},
  category: {type: String, required: true},
  link: {type: String, required: true},
  current_price: {type: Number, required: true},
  original_price: {type: Number, required: true},
  discounted: {type: Boolean, required: true},
  thumbnail: {type: String, required: true},
  query_url: {type: String, required: true},
});

module.exports = mongoose.model('wishlist', Wishlist);
