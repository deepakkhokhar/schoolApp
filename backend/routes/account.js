var SchoolaccountController = require("../app/controllers/schoolaccountController");
Schoolaccount = require("../app/models/Schoolaccount");
var express = require('express');
var router = express.Router();
router.post("/addAccount", SchoolaccountController.addAccount);
router.get("/getAllAccount/:id", SchoolaccountController.getAllAccount);
router.delete("/delete/:id", SchoolaccountController.deleteAccount);
module.exports = router;