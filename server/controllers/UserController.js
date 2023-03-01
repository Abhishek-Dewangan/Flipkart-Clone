const User = require('../models/UserModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// Signup/Register route
const signup = async (req, res) => {
  try {
    const {email, mobile_number} = req.body;
    const isEmailExist = await User.findOne({email});
    const isMobileExist = await User.findOne({mobile_number});
    if (isEmailExist) {
      res.status(409).send({message: 'Email is already exist'});
    } else if (isMobileExist) {
      res.status(409).send({message: 'Mobile number already exist'});
    } else {
      const user = await new User(req.body).save();
      res
        .status(200)
        .send({message: `${user.first_name} registered successfully`});
    }
  } catch (error) {
    res.status(400).send({message: error.message, error});
  }
};

// Signin/Login route
const signin = async (req, res) => {
  try {
    const {email, mobile_number, password} = req.body;
    const user = await User.findOne({$or: [{email}, {mobile_number}]});
    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        const token = await user.generateAuthToken();
        const {first_name, last_name, _id} = user;
        res
          .status(201)
          .send({
            message: `${user.first_name} signin successfully`,
            user: {userId: _id, first_name, last_name, token},
          });
      } else {
        res.status(401).send({message: 'Wrong password entered'});
      }
    } else {
      res.status(404).send({
        message: `${
          mobile_number ? 'Mobile Number' : 'Email'
        } is not registered`,
      });
    }
  } catch (error) {
    res.status(400).send({message: error.message, error});
  }
};

// Signout/Logout route
const signout = async (req, res) => {
  try {
    const user = await User.findOne({token: req.body.token});
    if (user) {
      user.token = '';
      await user.save();
      res.status(200).send({message: 'Logout successfully'});
    } else {
      res.status(498).send({message: 'Invalid token'});
    }
  } catch (error) {
    res.status(401).send({message: error.message, error});
  }
};

// Authentication route
const authentication = async (req, res) => {
  try {
    const {token} = req.body;
    if (token) {
      const isValid = jwt.verify(token, process.env.JWT_SECRET);
      res.send(isValid);
    }
  } catch (error) {
    res.status(401).send({message: error.message, error});
  }
};

// Exporting all user routes
module.exports = {signup, signin, signout, authentication};
