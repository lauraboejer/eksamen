const { Router } = require('express');
const express = require('express');
const router = express.Router();

const userControllers = require('../controllers/userControllers.js')

router.get('/', userControllers.showAllUsers);

router.post('/', userControllers.createUser);

router.get('/:email', userControllers.showSpecificUser);

router.delete('/:email', userControllers.deleteSpecificUser);

router.patch('/:email', userControllers.editSpecificUser);

module.exports = router;