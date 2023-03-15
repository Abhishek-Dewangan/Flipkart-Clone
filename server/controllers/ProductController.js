const Product = require('../models/ProductModel');

// Getting all product and sendign to client
const getProducts = async (req, res) => {
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

// Getting products by category
const getProductsByCategory = async (req, res) => {
  try {
    const {category} = req.params;
    const products = await Product.find({category});
    res.status(201).send({data: products});
  } catch (error) {
    res.status(401).send({message: error.message, error});
  }
};

// Getting 20 offerd products randomly
const getOfferProducts = async (req, res) => {
  try {
    const offerProducts = await Product.aggregate([{$sample: {size: 20}}]);
    res.status(201).send({data: offerProducts});
  } catch (error) {
    res.status(401).send({message: error.message, error});
  }
};

// Exporting all products routes
module.exports = {
  getProducts,
  getProductById,
  getProductsByCategory,
  getOfferProducts,
};
