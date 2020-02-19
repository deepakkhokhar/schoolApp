var ExpenseController = require("../app/controllers/ExpenseController");
Expense=require("../app/models/Expense");
var router = express.Router();
router.post("/addExpense", ExpenseController.addExpense);
router.get("/getAllExpense", ExpenseController.getAllExpense);
router.delete("/delete/:id", ExpenseController.deleteExpense);
router.get("/getExpense/:Id", ExpenseController.getExpense);
router.post("/updateExpense", ExpenseController.updateExpense);
module.exports = router;