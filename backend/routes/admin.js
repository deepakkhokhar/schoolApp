var adminController = require("../app/controllers/adminController");
Admin = require("../app/models/admin");
var express = require('express');
var router = express.Router();
router.post("/login", adminController.login);
router.post("/register",adminController.register); //register new admin user 
module.exports = router;