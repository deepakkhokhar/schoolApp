var permissionController = require("../app/controllers/permissionController");
adminpermission=require("../app/models/adminpermission");
var router = express.Router();
router.get("/getManagerPermission", permissionController.getManagerPermission);

module.exports = router;