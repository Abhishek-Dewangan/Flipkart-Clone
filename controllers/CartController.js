const Cart = require('../models/CartModel');

// Getting all products from cart
const getCartProducts = async (req, res) => {
  try {
    const {userid} = req.params;
    const response = await Cart.find({userId: userid});
    res
      .status(201)
      .send({message: 'Get cart data operation successful', data: response});
  } catch (error) {
    res.status(401).send({message: 'Unable to fetching cart data', error});
  }
};

// Adding product into cart
const addToCart = async (req, res) => {
  try {
    const {productId, userId} = req.body;
    const isProductExist = await Cart.findOne({productId, userId});
    if (isProductExist) {
      res.status(409).send({message: 'Already exist in cart'});
    } else {
      const response = await new Cart(req.body).save();
      res.status(201).send({
        message: 'Added into cart',
        data: response,
      });
    }
  } catch (error) {
    res.status(401).send({message: error.message, error});
  }
};

// Removing prouct from cart by Id
const removeFromCart = async (req, res) => {
  try {
    const {id} = req.params;
    const response = await Cart.findByIdAndDelete({_id: id});
    res.status(201).send({
      message: 'Removed from cart',
      data: response,
    });
  } catch (error) {
    res.status(401).send({message: 'Unable to remove product', error});
  }
};

// Remove all products from cart
const removeAllFromCart = async (req, res) => {
  try {
    const {userid} = req.params;
    const response = await Cart.deleteMany({userId: userid});
    res.status(201).send({
      message: 'Removed all from cart',
      data: response,
    });
  } catch (error) {
    res
      .status(401)
      .send({message: 'Unable to remove all products from cart', error});
  }
};

// Remove baught products from cart
const removeMultipleFromCart = async (req, res) => {
  try {
    const {userid} = req.params;
    const {productsId} = req.body;
    const response = await Cart.deleteMany({
      userId: userid,
      productId: {$in: productsId},
    });
    res
      .status(200)
      .send({message: 'Removed baught items from cart', data: response});
  } catch (error) {
    res.status(400).send({message: error.message, error});
  }
};

// Exporting all routes
module.exports = {
  getCartProducts,
  addToCart,
  removeFromCart,
  removeAllFromCart,
  removeMultipleFromCart,
};
