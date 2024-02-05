const express = require('express');
const { hasValidAuthJwt } = require('../../middlewares/authenticated');
const { loginUser, registerUser, getUser } = require('../controller/users');

const router = express.Router();

router.get('/', hasValidAuthJwt, getUser);
router.post('/login', loginUser);
router.post('/register', hasValidAuthJwt, registerUser);

module.exports = router;
