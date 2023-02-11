const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
  userId: {type: String, required: true},
  productId: {type: String, required: true},
});

module.exports = mongoose.model('cart', CartSchema);
