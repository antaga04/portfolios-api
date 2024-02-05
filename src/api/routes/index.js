const express = require('express');
const portfolioRouter = require('./portfolios');
const authRouter = require('./auth');

const router = express.Router();

router.use('/portfolios', portfolioRouter);
router.use('/auth', authRouter);

module.exports = router;
