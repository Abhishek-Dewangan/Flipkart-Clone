const express = require('express');
const {signin, signup, signout} = require('../controllers/UserController');

const router = express.Router();

// User routes
router.post('/signup', signup);
router.post('/signin', signin);
router.post('/signout', signout);

// Exporting router
module.exports = router;
