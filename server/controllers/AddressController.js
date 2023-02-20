// const { findByIdAndDelete } = require('../models/AddressModel');
const Address = require('../models/AddressModel');

const addNewAddress = async (req, res) => {
  try {
    const response = await new Address(req.body).save();
    res.status(201).send({message: 'Address added successfully', response});
  } catch (error) {
    res.status(401).send({message: error.message, error});
  }
};

const getAddress = async (req, res) => {
  try {
    const {userid} = req.params;
    const addresses = await Address.find({userId: userid});
    res.status(201).send({message: 'Successfully got the addres', addresses});
    res.send;
  } catch (error) {
    res.status(401).send({message: error.message, error});
  }
};

const removeAddress = async (req, res) => {
  try {
    const {id} = req.params;
    const response = await Address.findByIdAndDelete({_id: id});
    res.status(201).send({message: 'Address deleted successfully', response});
  } catch (error) {
    res.status(401).send({message: error.message, error});
  }
};

module.exports = {addNewAddress, getAddress, removeAddress};
