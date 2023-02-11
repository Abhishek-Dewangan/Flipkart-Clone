const mongoose = require('mongoose');

const Wishlist = new mongoose.Schema({
  userId: {type: String, required: true},
  productId: {type: String, required: true},
});

module.exports = mongoose.model('wishlist', Wishlist);
