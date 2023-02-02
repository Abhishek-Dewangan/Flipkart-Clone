const User = require('../models/UserModel');

const signup = async (req, res) => {
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

const signin = async (req, res) => {
  try {
    const user = await User.findOne({email: req.body.email});
    if (user) {
      const isMatch = await bcrypt.compare(req.body.password, user.password);
      if (isMatch) {
        const token = await user.generateAuthToken();
        res
          .status(201)
          .send({message: `${user.name} signin successfully`, token});
      } else {
        res.status(401).send({message: 'Wrong password entered'});
      }
    } else {
      res.status(404).send({message: 'Email is not registerd'});
    }
  } catch (error) {
    res.status(400).send('Error while signin');
  }
};

module.exports = {signup, signin};
