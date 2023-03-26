const Order = require('../models/OrderModel');

// Adding order in database
const addOrder = async (req, res) => {
  try {
    const response = await Order.insertMany(req.body);
    res.status(200).send({message: 'Ordered Successfully', data: response});
  } catch (error) {
    res.status(400).send({message: error.message, error});
  }
};

// Getting ordres from database for user specific
const getOrders = async (req, res) => {
  try {
    const {id} = req.params;
    const response = await Order.find({userId: id});
    res.status(200).send({message: 'Get orders successfully', data: response});
  } catch (error) {
    res.status(400).send({message: error.message, error});
  }
};

// Exporting all orders related requests
module.exports = {addOrder, getOrders};
