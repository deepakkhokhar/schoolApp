var AcademicController = require("../app/controllers/academicController");
Academic = require("../app/models/academics");
Academicyear = require("../app/models/academicyear");
Academiclevel = require("../app/models/academiclevel");

var express = require('express');
var router = express.Router();
router.post("/addclass", AcademicController.addclass);
router.get("/getclass/:id", AcademicController.getAllClass);
router.get("/getAClass/:id", AcademicController.getAClass);
router.delete("/delete/:id", AcademicController.deleteClass);
router.post("/updateClass/:id", AcademicController.updateClass);

router.post("/addstream/:classId", AcademicController.addstream);
router.get("/getstream/:classId", AcademicController.getstream);

router.post("/addsubject/:levelId", AcademicController.addsubject);
router.get("/getsubject/:levelId", AcademicController.getsubject);

router.post("/addstudent/:streamId", AcademicController.addstudent);
router.get("/getstudent/:streamId", AcademicController.getstudent);

router.post("/addyear", AcademicController.addyear);
router.get("/getyear/:id", AcademicController.getyear);
router.delete("/deleteyear/:id", AcademicController.deleteyear);
router.get("/getAYear/:id", AcademicController.getAYear);
router.post("/updateYear/:id", AcademicController.updateYear);

router.post("/addlevel", AcademicController.addlevel);
router.get("/getlevel/:id", AcademicController.getlevel);
router.delete("/deletelevel/:id", AcademicController.deletelevel);
router.get("/getALevel/:id", AcademicController.getALevel);
router.post("/updateLevel/:id", AcademicController.updateLevel);
module.exports = router;