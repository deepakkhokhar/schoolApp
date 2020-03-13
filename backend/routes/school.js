var schoolController = require("../app/controllers/schoolController");
School=require("../app/models/School");
Schooluser=require("../app/models/Schooluser");

var router = express.Router();
multer = require("multer");
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/upload')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})
upload = multer({
    storage: storage
})
router.post("/addSchool",  upload.single('file'), schoolController.addSchool);
router.post("/updateSchoolUser", schoolController.updateSchoolUser);
router.post("/updateSchool/:id",upload.single('file'), schoolController.updateSchool);
router.post("/addSchoolUser", schoolController.addSchoolUser);
router.get("/getAllSchool", schoolController.getAllSchool);
router.get("/getSchoolCount", schoolController.getSchoolCount);
router.get("/getAllSchoolUser/:id", schoolController.getAllSchoolUser);
router.get("/getAllSchoolUser/:id", schoolController.getAllSchoolUser);
router.get("/getSchool/:schoolId", schoolController.getSchoolInformation);
router.get("/getSchoolUser/:userid", schoolController.getSchoolUserInformation);
router.delete("/delete/:id", schoolController.deleteSchool);
router.delete("/deleteuser/:id", schoolController.deleteSchoolUser);
router.post("/login", schoolController.login);
module.exports = router;