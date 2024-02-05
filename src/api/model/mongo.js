const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema({
  Author: String,
  Screenshot: String,
  LiveURL: String,
  Repo: String,
  TechStack: Array,
});

const emptySchema = new mongoose.Schema({});

const Portfolio = mongoose.model('Portfolio', portfolioSchema);
const User = mongoose.model('User', emptySchema);

module.exports = {
  Portfolio,
  User,
};
