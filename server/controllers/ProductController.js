const Product = require('../models/ProductModel');

// Getting all product and sendign to client
const getProduct = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(201).send({data: products});
  } catch (error) {
    res.status(401).send({message: error.message, error});
  }
};

// Getting single product by id and sending
const getProductById = async (req, res) => {
  try {
    const {id} = req.params;
    const product = await Product.findById({_id: id});
    res.status(201).send({data: product});
  } catch (error) {
    res.status(401).send({message: error.message, error});
  }
};

// Exporting all products routes
module.exports = {getProduct, getProductById};
