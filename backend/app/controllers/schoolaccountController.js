exports.addAccount = function(req, res) {
  console.log(req.body);
  Schoolaccount.find({adminId:req.body.adminId,schoolId:req.body.schoolId}).countDocuments().exec(function(err, data) {
    if (!err){ 
      if(data==0){
        if(req.body.amountType==1){
          req.body.balance=req.body.amount;
        }else{
          req.body.balance=-req.body.amount;
        }
        var data=req.body;
        var Schoolaccountdata = new Schoolaccount(data);
     
        // save model to database
        Schoolaccountdata.save(function (err, data) {
            console.log(err);
          if (err) return res.json({status: 100,message: "Error found"});
         
          res.json({status: 200,message: "SchoolaccountSaved"});
        });
      }else{
        Schoolaccount.findOne({adminId:req.body.adminId,schoolId:req.body.schoolId}).sort({_id:-1}).exec(function(err, data) {
          if (!err){
            console.log(data.balance);
            if(req.body.amountType==1){
              req.body.balance=data.balance+req.body.amount;
            }else{
              req.body.balance=data.balance-req.body.amount;
            } 
            var data=req.body;
            var Schoolaccountdata = new Schoolaccount(data);
        
            // save model to database
            Schoolaccountdata.save(function (err, data) {
                console.log(err);
              if (err) return res.json({status: 100,message: "Error found"});
            
              res.json({status: 200,message: "SchoolaccountSaved"});
            });
          }

        }); 

      }
      
    } else {return res.json({status: 100,message: "Error found"});}
  });
  
    
}

exports.getAllAccount=function(req, res) {
    console.log(req.params.id);
    
  Schoolaccount.find({adminId:req.params.id}).populate({path:'schoolId',select:'name'}).exec(function(err, data) {
    if (!err){ 
      res.json({status: 200,data: data});
    } else {return res.json({status: 100,message: "Error found"});}
});
}

exports.deleteAccount=function(req, res) {
    console.log(req.params.id);
    Schoolaccount.remove({_id:req.params.id}, function (err) {
      if (err) return res.json({status: 100,message: "Error found"});
      // deleted at most one tank document
      res.json({status: 200,message: "accountRemoved"});
    });
  }

  exports.getSchoolAccount=function(req, res) {
    console.log(req.params.id);
    
  Schoolaccount.find({adminId:req.params.id,schoolId:req.params.schoolId}).populate({path:'schoolId',select:'name'}).exec(function(err, data) {
    if (!err){ 
      res.json({status: 200,data: data});
    } else {return res.json({status: 100,message: "Error found"});}
});
}
  