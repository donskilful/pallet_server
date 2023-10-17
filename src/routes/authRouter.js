const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();

router.post('/sign_up', authController.sign_up);

module.exports = router;
