exports.getManagerPermission=function(req, res) {
    adminpermission.findOne({'role':'manager'}).exec(function(err, data) {
      if (!err){ 
        res.json({status: 200,data: data});
      } else {return res.json({status: 100,message: "Error found"});}
  });
  }