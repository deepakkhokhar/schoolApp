var AcademicController = require("../app/controllers/academicController");
Academic = require("../app/models/academics");
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
module.exports = router;