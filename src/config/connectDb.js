const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const option = {
  socketTimeoutMS: 30000,
};

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.DATABASE, option);
    console.log('Database connected successfully');
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDb;
