exports.addExpenseCategory = function(req, res) {
    console.log(req.body);
    var data={ adminId:req.body.adminId,name: req.body.formvalue.Name,quantity:req.body.formvalue.Quantity,description:req.body.formvalue.description};
        var ExpenseCategorydata = new ExpenseCategory(data);
     
        // save model to database
        ExpenseCategorydata.save(function (err, data) {
          if (err) return res.json({status: 100,message: "Error found"});
         
          res.json({status: 200,message: "ExpenseCategorySaved"});
        }); 
}

exports.getAllExpense=function(req, res) {
    ExpenseCategory.find({}, function(err, data) {
      if (!err){ 
        res.json({status: 200,data: data});
      } else {return res.json({status: 100,message: "Error found"});}
  });
  }

  exports.deleteExpenseCategory=function(req, res) {
    console.log(req.params.id);
    ExpenseCategory.remove({_id:req.params.id}, function (err) {
      if (err) return res.json({status: 100,message: "Error found"});
      // deleted at most one tank document
      res.json({status: 200,message: "ExpenseCategoryRemoved"});
    });
  }

  exports.updateExpenseCategory=function(req, res) {
    var data={ name: req.body.formvalue.Name,quantity:req.body.formvalue.Quantity,description:req.body.formvalue.description};
    ExpenseCategory.findOneAndUpdate({_id:req.body.expenseCategoryId}, data, {upsert: true}, function(err, doc) {
      if (err) return res.json({status: 100,message: "Error found"});
      // deleted at most one tank document
      res.json({status: 200,message: "expenseCategoryUpdated"});
  });
  }

  exports.getExpensecategory=function(req, res) {
  
    ExpenseCategory.findById(req.params.Id, function(err, data) {
      if (!err){ 
        res.json({status: 200,data: data});
      } else {return res.json({status: 100,message: "Error found"});}
  });
  }