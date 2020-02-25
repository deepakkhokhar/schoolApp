exports.addAccount = function(req, res) {
    var data=req.body;
        var Schoolaccountdata = new Schoolaccount(data);
     
        // save model to database
        Schoolaccountdata.save(function (err, data) {
            console.log(err);
          if (err) return res.json({status: 100,message: "Error found"});
         
          res.json({status: 200,message: "SchoolaccountSaved"});
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
  