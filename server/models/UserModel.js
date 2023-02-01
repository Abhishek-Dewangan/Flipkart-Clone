const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();

// Creating user schema
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
  mobile_number: {
    type: Number,
    required: true,
    unique: true,
    minlength: [10, 'Please enter 10 digit mobile number'],
    maxlength: [10, 'Please enter 10 digit mobile number'],
  },
  password: {
    type: String,
    trim: true,
    minlength: [8, 'Minimum length of password should be 8'],
  },
  token: {type: String},
});

// Password hashing
UserSchema.pre('save', async function (next) {
  try {
    if (this.isModified('password')) {
      this.password = await bcrypt.hash(this.password, 10);
    }
    next();
  } catch (error) {
    next(error);
  }
});


