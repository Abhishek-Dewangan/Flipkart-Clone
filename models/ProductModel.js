const mongoose = require('mongoose');

// Products Schema
const ProductSchema = new mongoose.Schema({
  name: {type: String},
  category: {type: String},
  link: {type: String},
  current_price: {type: Number},
  original_price: {type: Number},
  discounted: {type: Boolean},
  thumbnail: {type: String},
  query_url: {type: String},
});

module.exports = mongoose.model('product', ProductSchema);
