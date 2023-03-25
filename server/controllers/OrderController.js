const Order = require('../models/OrderModel');

const addOrder = async (req, res) => {
  try {
    const response = await Order.insertMany(req.body).save();
    console.log(response);
    res.status(200).send({message: 'Ordered Successfully', data: response});
  } catch (error) {
    res.status(400).send({message: error.message, error});
  }
};
