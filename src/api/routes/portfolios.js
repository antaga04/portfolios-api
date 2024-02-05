const express = require('express');

const {
  getAllPortfolios,
  getPortfolioById,
  createPortfolio,
  updatePortfolioById,
  deletePortfolio,
} = require('../controller/portfolios');
const uploadFile = require('../../middlewares/uploadFile');
const { hasValidAuthJwt } = require('../../middlewares/authenticated');

const router = express.Router();

router.get('/', getAllPortfolios);
router.get('/:id', getPortfolioById);
router.post('/', uploadFile.single('Screenshot'), createPortfolio);
router.put('/:id', hasValidAuthJwt, uploadFile.single('Screenshot'), updatePortfolioById);
router.delete('/:id', hasValidAuthJwt, deletePortfolio);

module.exports = router;
