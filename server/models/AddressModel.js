const mongoose = require('mongoose');

const AddressSchema = mongoose.Schema({
  userId: {type: String, required: true},
  name: {type: String, required: true},
  number: {type: String, required: true},
  pincode: {type: String, required: true},
  locality: {type: String},
  houseAddress: {type: String, required: true},
  city: {type: String, required: true},
  state: {type: String, required: true},
  addressType: {type: String},
  landmark: {type: String},
});

module.exports = mongoose.model('address', AddressSchema);
