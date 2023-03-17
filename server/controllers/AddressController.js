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

const updateAddress = async (req, res) => {
  try {
    const {id} = req.params;
    const {address} = req.body;
    const response = await Address.findByIdAndUpdate({_id: id}, address);
    res.status(201).send({message: 'Address updated', response});
  } catch (error) {
    res.status(400).send({message: error.message, error});
  }
};

// Exporting all address routes
module.exports = {addNewAddress, getAddress, removeAddress, updateAddress};
