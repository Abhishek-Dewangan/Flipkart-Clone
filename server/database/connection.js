const mongoose = require('mongoose');
require('dotenv').config();

const mongodb_url = process.env.MONGODB_URL;

const connection = async () => {
  try {
    const connetionParams = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
    await mongoose.connect(mongodb_url);
    console.log('Application is connected to databse');
  } catch (error) {
    console.log('Unable to connect with database', error);
  }
};

module.exports = connection;
