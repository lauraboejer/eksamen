const { Router } = require('express');
const express = require('express');
const router = express.Router();

const matchControllers = require('../controllers/matchControllers.js')

//show all users
router.get('/', matchControllers.showAllMatches);

//create user
router.post('/', matchControllers.createMatch);

//show specific user
router.get('/:email', matchControllers.showSpecificMatch);

//delete specific user
router.delete('/:email', matchControllers.deleteSpecificMatch);

// router.patch('/:email', matchControllers.editSpecificUser);

module.exports = router;