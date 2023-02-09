const Cart = require('../models/CartModel');

// Getting all products from cart
const getCartProducts = async (req, res) => {
  try {
    const cartProducts = await Cart.find();
    res
      .status(201)
      .send({message: 'Cart data fetched successfully', data: cartProducts});
  } catch (error) {
    res.status(401).send({message: 'Unable to fetching cart data', error});
  }
};

// Adding product into cart
const addToCart = async (req, res) => {
  try {
    const {_id} = req.body;
    const isProductExist = await Cart.findById({_id});
    if (isProductExist) {
      res.status(409).send({message: 'Product already added into cart'});
    } else {
      const response = await new Cart(req.body).save();
      res
        .status(201)
        .send({message: 'Product successfully added into cart', response});
    }
  } catch (error) {
    res.status(401).send({message: 'Unable to add product into cart', error});
  }
};

// Removing prouct from cart by Id
const removeFromCart = async (req, res) => {
  try {
    const {id} = req.params;
    const removeItem = await Cart.findByIdAndDelete({_id: id});
    res
      .status(201)
      .send({message: 'Product successfully removed from cart', removeItem});
  } catch (error) {
    res.status(401).send({message: 'Unable to remove product', error});
  }
};

module.exports = {getCartProducts, addToCart, removeFromCart};
