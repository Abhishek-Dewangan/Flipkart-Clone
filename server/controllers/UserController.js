const User = require('../models/UserModel');

const signin = async (req, res) => {
  try {
    const isExist = await User.findOne({email: req.body.email});
    if (isExist) {
      res.status(409).send('Email is already exist');
    } else {
      const user = await new User(req.body).save();
      res.status(200).send(`${user.name} registered successfully`);
    }
  } catch (error) {
    res.status(400).send('Invalid data or invalid syntax');
  }
};

module.exports = {signin};
