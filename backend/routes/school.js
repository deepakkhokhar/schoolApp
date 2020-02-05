var schoolController = require("../app/controllers/schoolController");
School=require("../app/models/School");

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
router.get("/getAllSchool", schoolController.getAllSchool);
router.delete("/delete/:id", schoolController.deleteSchool);
module.exports = router;