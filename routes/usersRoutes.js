const { Router } = require('express');
const express = require('express');
const router = express.Router();

const userControllers = require('../controllers/userControllers.js')

//show all users
router.get('/', userControllers.showAllUsers);

//create user
router.post('/', userControllers.createUser);

//show specific user
router.get('/:email', userControllers.showSpecificUser);

//delete specific user
router.delete('/:email', userControllers.deleteSpecificUser);

router.patch('/:email', userControllers.editSpecificUser);

module.exports = router;