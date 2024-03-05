// Route de creation d'utilisateur (prestataires)
const express = require('express');
const userController = require('../authentification/user.controller');

const router = express.Router();

router.post('/sign-up', userController.signUp);

module.exports = router;