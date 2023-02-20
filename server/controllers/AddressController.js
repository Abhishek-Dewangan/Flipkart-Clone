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
    const {userId} = req.params;
    const addresses = await Address.find({userId: userId});
    res.status(201).send({message: 'Successfully got the addres', addresses});
    res.send;
  } catch (error) {
    res.status(401).send({message: 'Unable to get address', error});
  }
};

const removeAddress = async (req, res) => {
  try {
    const {addressId} = req.params;
    const response = await findByIdAndDelete({_id: addressId});
    res.status(201).send({message: 'Address deleted successfully', response});
  } catch (error) {
    res.status(401).send({message: 'Unable to delete address', error});
  }
};

module.exports = {addNewAddress, getAddress, removeAddress};
