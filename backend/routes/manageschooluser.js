var schoolUserController = require("../app/controllers/SchoolUserController");
Schooluser=require("../app/models/Schooluser");
var router = express.Router();
router.post("/login", schoolUserController.schoolUserLogin);
 
module.exports = router;
