const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();

// Creating user schema
const UserSchema = new mongoose.Schema({
  first_name: {type: String, required: true},
  last_name: {type: String},
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
    min: [1000000000, 'Must be 10 digits'],
    max: [9999999999, 'Must be 10 digits only'],
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

// Capitalize first letter of firstname and lastname
UserSchema.pre('save', function (next) {
  try {
    this.first_name = this.first_name.charAt(0).toUpperCase() + this.first_name.slice(1);
    this.last_name = this.last_name.charAt(0).toUpperCase() + this.last_name.slice(1);
    next();
  } catch (error) {
    next(error);
  }
});

//  Token generating for authentication
UserSchema.methods.generateAuthToken = async function () {
  try {
    const token = await jwt.sign({_id: this._id}, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });
    this.token = token;
    await this.save();
    return token;
  } catch (error) {
    console.log(error);
  }
};

module.exports = new mongoose.model('User', UserSchema);
