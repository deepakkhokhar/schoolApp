var adminController = require("../app/controllers/adminController");
Admin = require("../app/models/admin");
var express = require('express');
var router = express.Router();
router.post("/login", adminController.login);
router.post("/register",adminController.registerAdmin); //register new admin user 
router.get("/",adminController.getAllAdmins); //get admin users 
router.get("/view/:id", adminController.viewUser);
router.put("/update/:id", adminController.updateUser);
module.exports = router;