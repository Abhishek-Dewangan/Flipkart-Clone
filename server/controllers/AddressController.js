const Address = require('../models/AddressModel');

const addNewAddress = async (req, res) => {
  try {
    const response = await new Address(req.body).save();
    res.status(201).send({message: 'Address added successfully', response});
  } catch (error) {
    res.status(401).send({message: 'Unable to add new address', error});
  }
};
