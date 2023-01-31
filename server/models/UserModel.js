const mongoose = require('mongoose');
const validator = require('validator');

const UserSchema = mongoose.Schema({
  first_name: {type: String, required: true},
  last_name: {type: String, required: true},
  email: {
    type: String,
    required: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) throw new Error('Invalid email');
    },
    lowercase: true,
    trim: true,
  },
  mobile_number: {type: Number, required: true, unique: true},
  token: {type: String},
});
