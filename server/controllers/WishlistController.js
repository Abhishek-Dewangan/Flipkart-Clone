const Wishlist = require('../models/WishlishModel');

// Getting all product from wishlist
const getWishlistProducts = async (req, res) => {
  try {
    const {userid} = req.params;
    const wishlistProducts = await Wishlist.find({userId: userid});
    res.status(201).send({
      message: 'Wishlist product fetched successfully',
      data: wishlistProducts,
    });
  } catch (error) {
    res.status(409).send({message: error.message, error});
  }
};

// Adding product in whishlist
const addToWishlist = async (req, res) => {
  try {
    const {userId, productId} = req.body;
    const isProductExist = await Wishlist.findOne({userId, productId});
    if (isProductExist) {
      res.status(409).send({message: 'Already exist in wishlist!'});
    } else {
      const response = await new Wishlist(req.body).save();
      res.status(201).send({
        message: 'Added into wishlist',
        data: response,
      });
    }
  } catch (error) {
    res.status(401).send({message: error.message, error});
  }
};

// Removing product from wihslist
const removeFromWishlist = async (req, res) => {
  try {
    const {id} = req.params;
    const response = await Wishlist.findByIdAndDelete({_id: id});
    res.status(201).send({
      message: 'Removed from wishlist',
      data: response,
    });
  } catch (error) {
    res.status(401).send({message: error.message, error});
  }
};

// Remove all products from wishlist
const removeAllFromWishlist = async (req, res) => {
  try {
    const {userid} = req.params;
    const response = await Wishlist.deleteMany({userId: userid});
    res
      .status(201)
      .send({message: 'Removed all from wishlist', data: response});
  } catch (error) {
    res.status(401).send({message: error.message, error});
  }
};

// Exporting wishlist routes
module.exports = {
  getWishlistProducts,
  addToWishlist,
  removeFromWishlist,
  removeAllFromWishlist,
};
