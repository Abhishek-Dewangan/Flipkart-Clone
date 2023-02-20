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
    res.status(409).send({message: 'Unable to fetch wishlist products', error});
  }
};

// Adding product in whishlist
const addToWishlist = async (req, res) => {
  try {
    const {userId, productId} = req.body;
    const isProductExist = await Wishlist.findOne({userId, productId});
    if (isProductExist) {
      res.status(409).send({message: 'Product is already exist in wishlist'});
    } else {
      const response = await new Wishlist(req.body).save();
      res
        .status(201)
        .send({message: 'Product successfully added into wishlist', response});
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
    res
      .status(201)
      .send({message: 'Product removed successfully from wishlist', response});
  } catch (error) {
    res
      .status(401)
      .send({message: 'Unable to remove product from wishlist', error});
  }
};

// Remove all products from wishlist
const removeAllFromWishlist = async (req, res) => {
  try {
    const response = await Wishlist.remove({});
    res
      .status(201)
      .send({message: 'All products removed from wishlist', response});
  } catch (error) {
    res
      .status(401)
      .send({message: 'Unabe to remove all products from wishlist', error});
  }
};

// Exporting wishlist routes
module.exports = {
  getWishlistProducts,
  addToWishlist,
  removeFromWishlist,
  removeAllFromWishlist,
};
