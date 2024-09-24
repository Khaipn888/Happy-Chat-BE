const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Định nghĩa routes
router.get('/users/:id', userController('getUserById'));
router.post('/users', userController('createUser'));

module.exports = router;
