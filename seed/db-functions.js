const { Portfolio } = require('../src/api/model/mongo');
const seed = require('./seed');

const cleanCollections = async () => {
  await Portfolio.collection.drop();
  console.log('>>> Collection/s droped!');
};

const saveDocuments = async () => {
  try {
    const portfolios = await Portfolio.insertMany(seed.portfolios);
    console.log('>>> Doc/s successfully saved!');
    return portfolios;
  } catch (error) {
    console.error('Error saving documents:', error);
    throw error;
  }
};


module.exports = {
  cleanCollections,
  saveDocuments,
};
