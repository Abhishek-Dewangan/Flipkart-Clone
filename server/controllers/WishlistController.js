Wishlist = require('../models/WishlishModel');

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
