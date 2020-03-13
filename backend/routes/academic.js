var AcademicController = require("../app/controllers/academicController");
Academic = require("../app/models/academics");
Academicyear = require("../app/models/academicyear");
Academicterm = require("../app/models/academicterm");

var express = require('express');
var router = express.Router();
router.post("/addclass", AcademicController.addclass);
router.get("/getclass/:id", AcademicController.getAllClass);
router.get("/getAClass/:id", AcademicController.getAClass);
router.delete("/delete/:id", AcademicController.deleteClass);
router.post("/updateClass/:id", AcademicController.updateClass);

router.post("/addstream/:classId", AcademicController.addstream);
router.get("/getstream/:classId", AcademicController.getstream);

router.post("/addsubject/:streamId", AcademicController.addsubject);
router.get("/getsubject/:streamId", AcademicController.getsubject);

router.post("/addyear", AcademicController.addyear);
router.get("/getyear/:id", AcademicController.getyear);
router.delete("/deleteyear/:id", AcademicController.deleteyear);
router.get("/getAYear/:id", AcademicController.getAYear);
router.post("/updateYear/:id", AcademicController.updateYear);

router.post("/addterms", AcademicController.addterms);
router.get("/getterm/:id", AcademicController.getterm);
router.delete("/deleteterm/:id", AcademicController.deleteterm);
router.get("/getATerm/:id", AcademicController.getATerm);
router.post("/updateTerm/:id", AcademicController.updateTerm);
module.exports = router;