exports.addExpense = function(req, res) {
    console.log(req.body);
    var data={ adminId:req.body.adminId,name: req.body.formvalue.name,schoolId:req.body.formvalue.schoolId,description:req.body.formvalue.description,expensecategoryId:req.body.formvalue.expensecategoryId,payer:req.body.formvalue.payer,payee:req.body.formvalue.payee,amount:req.body.formvalue.amount};
        var Expensedata = new Expense(data);
     
        // save model to database
        Expensedata.save(function (err, data) {
          if (err) return res.json({status: 100,message: "Error found"});
         
          res.json({status: 200,message: "ExpenseSaved"});
        }); 
}

exports.getAllExpense=function(req, res) {
    Expense.find({}).populate({path:'schoolId',select:'name'}).populate({path:'expensecategoryId',select:'name'}).exec(function(err, data) {
      if (!err){ 
        res.json({status: 200,data: data});
      } else {return res.json({status: 100,message: "Error found"});}
  });
  }

  exports.deleteExpense=function(req, res) {
    console.log(req.params.id);
    Expense.remove({_id:req.params.id}, function (err) {
      if (err) return res.json({status: 100,message: "Error found"});
      // deleted at most one tank document
      res.json({status: 200,message: "ExpenseCategoryRemoved"});
    });
  }
  exports.getExpense=function(req, res) {
  
    Expense.findById(req.params.Id, function(err, data) {
      if (!err){ 
        res.json({status: 200,data: data});
      } else {return res.json({status: 100,message: "Error found"});}
  });
  }

  exports.updateExpense=function(req, res) {
    
    Expense.findOneAndUpdate({_id:req.body.expenseId}, req.body.formvalue, {upsert: true}, function(err, doc) {
      if (err) return res.json({status: 100,message: "Error found"});
      // deleted at most one tank document
      res.json({status: 200,message: "expenseUpdated"});
  });
  }