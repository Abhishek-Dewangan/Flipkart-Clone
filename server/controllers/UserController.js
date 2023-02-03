const User = require('../models/UserModel');
const bcrypt = require('bcrypt');

// Signup/Register route
const signup = async (req, res) => {
  try {
    const {email} = req.body;
    const isExist = await User.findOne({email});
    if (isExist) {
      res.status(409).send({message: 'Email is already exist'});
    } else {
      const user = await new User(req.body).save();
      res.status(200).send({message: `${user.first_name} registered successfully`});
    }
  } catch (error) {
    res.status(400).send({message: 'Invalid data or invalid syntax', error});
  }
};

// Signin/Login route
const signin = async (req, res) => {
  try {
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        const token = await user.generateAuthToken();
        res
          .status(201)
          .send({message: `${user.first_name} signin successfully`, token});
      } else {
        res.status(401).send({message: 'Wrong password entered'});
      }
    } else {
      res.status(404).send({message: 'Email is not registerd'});
    }
  } catch (error) {
    res.status(400).send({message: 'Error while signin', error});
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
    res.status(401).send({message: 'Error while signout', error});
  }
};

// Exporting all user routes
module.exports = {signup, signin, signout};
