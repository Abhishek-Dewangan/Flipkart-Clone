const Product = require('../models/ProductModel');

// Getting all product and sendign to client
const getProduct = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(201).send({data: products});
  } catch (error) {
    res.status(401).send({message: 'Unable to get products', error});
  }
};



module.exports = {getProduct};
