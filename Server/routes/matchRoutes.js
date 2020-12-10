const { Router } = require('express');
const express = require('express');
const router = express.Router();

const matchControllers = require('../controllers/matchControllers.js')

router.get('/:email', matchControllers.potentialMatches);

router.patch('/:email', matchControllers.likeUser); 

router.patch('/:email', matchControllers.dislikeUser); 

module.exports = router;