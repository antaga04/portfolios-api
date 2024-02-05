const { Portfolio } = require('../api/model/mongo');

const getAllPortfoliosFromDB = async (filter) => {
  const processedFilter = filter ? filter.split('+').join(' ') : '';
  const nameFilterOp = {
    Author: { $regex: new RegExp(processedFilter, 'i') },
  };

  const portfolios = await Portfolio.find(filter ? nameFilterOp : {});
  return portfolios;
};

const getPortfolioByIdFromDB = async (id) => {
  const portfolio = await Portfolio.findById(id);
  return portfolio;
};

const createPortfolioInDB = async (payload) => {
  const newPortfolio = new Portfolio(payload);
  await newPortfolio.save();

  return newPortfolio;
};

const updatePortfolioByIdInDB = async (id, payload) => {
  const portfolio = await Portfolio.findByIdAndUpdate(id, payload, { new: true });
  return portfolio;
};

const deletePortfolioFromDB = async (id) => {
  await Portfolio.deleteOne({ _id: id });
};

module.exports = {
  getAllPortfoliosFromDB,
  getPortfolioByIdFromDB,
  createPortfolioInDB,
  updatePortfolioByIdInDB,
  deletePortfolioFromDB,
};
