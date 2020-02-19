var ExpenseCategoryController = require("../app/controllers/ExpenseCategoryController");
ExpenseCategory=require("../app/models/ExpenseCategory");

var router = express.Router();
router.post("/addExpenseCategory", ExpenseCategoryController.addExpenseCategory);
router.get("/getAllExpense", ExpenseCategoryController.getAllExpense);
router.delete("/delete/:id", ExpenseCategoryController.deleteExpenseCategory);
router.post("/updateExpenseCategory", ExpenseCategoryController.updateExpenseCategory);
router.get("/getExpensecategory/:Id", ExpenseCategoryController.getExpensecategory);
module.exports = router;