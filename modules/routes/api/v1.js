const express = require('express');
const router = express.Router();
const { api : ControllerApi } = config.path.controllers;
const AuthController = require(`${ControllerApi}/v1/HomeController`);

router.get('/' , AuthController.index);

router.post('/login' , AuthController.login.bind(AuthController));
router.post('/register' , AuthController.register.bind(AuthController));


module.exports = router;
