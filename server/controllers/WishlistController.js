const Wishlist = require('../models/WishlishModel');

// Getting all product from wishlist
const getWishlistProducts = async (req, res) => {
  try {
    const wishlistProducts = await Wishlist.find();
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
    const {_id} = req.body;
    const isExist = await Wishlist.findById({_id});
    if (isExist) {
      res.status(409).send({message: 'Product is already exist in wishlist'});
    } else {
      const response = await Wishlist(req.body).save();
      res
        .status(201)
        .send({message: 'Product successfully added into wishlist', response});
    }
  } catch (error) {
    res
      .status(401)
      .send({message: 'Unable to add producut on wishlist', error});
  }
};

// Removing product from wihslist
const removeFromWishlist = async (req, res) => {
  try {
    const {id} = req.params;
    const response = await Wishlist.findByIdAndDelete({_id: id});
    res
      .status(201)
      .send({message: 'Product removed successfully from wishlist',response});
  } catch (error) {
    res
      .status(401)
      .send({message: 'Unable to remove product from wishlist', error});
  }
};

// Remove all products from wishlist
const removeAllFromWishlist = async(req,res) => {
  try {
    const response = await Wishlist.remove({});
    res.status(201).send({message:'All products removed from wishlist',response});
  } catch (error) {
    res.status(401).send({message:'Unabe to remove all products from wishlist',error});
  }
}

module.exports = {getWishlistProducts, addToWishlist, removeFromWishlist, removeAllFromWishlist};
