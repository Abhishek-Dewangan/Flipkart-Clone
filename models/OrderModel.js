const mongoose = require('mongoose');

// Order Schema
const OrderSchema = new mongoose.Schema({
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
  date: {type: String, required: true},
});

module.exports = mongoose.model('order', OrderSchema);
