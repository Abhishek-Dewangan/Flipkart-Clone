const mongoose = require('mongoose');

// Address Schema
const AddressSchema = mongoose.Schema({
  userId: {type: String, required: true},
  name: {type: String, required: true},
  number: {
    type: Number,
    min: [1000000000, 'Number must be 10 digits'],
    max: [9999999999, 'Number must be 10 digits only'],
    required: true,
  },
  pincode: {
    type: Number,
    min: [100000, 'Pincode must be 6 digits'],
    max: [999999, 'Pincode must be 6 digits only'],
    required: true,
  },
  locality: {type: String},
  houseAddress: {type: String, required: true},
  city: {type: String, required: true},
  state: {type: String, required: true},
  addressType: {
    type: String,
    enum: ['HOME', 'OFFICE', 'OTHER'],
    default: 'HOME',
  },
  landmark: {type: String},
});

module.exports = mongoose.model('address', AddressSchema);
