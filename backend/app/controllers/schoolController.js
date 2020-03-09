exports.addSchoolUser = function(req, res) {
  console.log(req.body);
  var data={ schoolId:req.body.schoolId,adminId:req.body.adminId,firstName: req.body.formvalue.firstName, lastName: req.body.formvalue.lastName, userName: req.body.formvalue.userName,
    emailaddress:req.body.formvalue.emailaddress,password:req.body.formvalue.password,usertype:req.body.formvalue.usertype};
    var SchoolInfoUser = new Schooluser(data);
 
    // save model to database
    SchoolInfoUser.save(function (err, data) {
      if (err) return res.json({status: 100,message: "Error found"});
     
      res.json({status: 200,message: "schoolUserSaved"});
    }); 
}
exports.addSchool = function(req, res) {
  var path,status;
  if(req.body.status=="undefined" || req.body.status==undefined){
    status=false;
  }else{
    status=req.body.status;
  } 
  if(req.file){
  
    path = 'http://localhost:3000/upload/'+req.file.originalname;
  }else{
    path='';
  }
  
  var data={ name: req.body.fullName, registrationNumber: req.body.regNo, country: req.body.country,
    city:req.body.city,registrationDate:req.body.regDate,phoneNumber:req.body.phonenumber,email:req.body.emailaddress,
    address:req.body.address,logo:path,adminId:req.body.adminId,amount:req.body.amount,isActive:status,pay:req.body.pay};
  // Call your database method here with filename and path
 
 var SchoolInfo = new School(data);
 
    // save model to database
    SchoolInfo.save(function (err, data) {
      if (err) return res.json({status: 100,message: "Error found"});
     
      res.json({status: 200,message: "schoolSaved"});
    }); 
  
}

exports.getAllSchool=function(req, res) {
  School.find({}, function(err, data) {
    if (!err){ 
      res.json({status: 200,data: data});
    } else {return res.json({status: 100,message: "Error found"});}
});
}

exports.getAllSchoolUser=function(req, res) {
  console.log(req.params.id);
  Schooluser.find({schoolId:req.params.id}, function(err, data) {
    if (!err){ 
      res.json({status: 200,data: data});
    } else {return res.json({status: 100,message: "Error found"});}
});
}

exports.deleteSchool=function(req, res) {
  console.log(req.params.id);
  School.remove({_id:req.params.id}, function (err) {
    if (err) return res.json({status: 100,message: "Error found"});
    // deleted at most one tank document
    res.json({status: 200,message: "schoolRemoved"});
  });
}

exports.deleteSchoolUser=function(req, res) {
  console.log(req.params.id);
  Schooluser.remove({_id:req.params.id}, function (err) {
    if (err) return res.json({status: 100,message: "Error found"});
    // deleted at most one tank document
    res.json({status: 200,message: "schoolRemoved"});
  });
}

exports.getSchoolCount=function(req, res) {
  School.count({}, function (err,data) {
    if (err) return res.json({status: 100,message: "Error found"});
    // deleted at most one tank document
    res.json({status: 200,data: data});
  });
} 

exports.getSchoolUserInformation=function(req, res) {
  
  Schooluser.findById(req.params.userid, function(err, data) {
    if (!err){ 
      res.json({status: 200,data: data});
    } else {return res.json({status: 100,message: "Error found"});}
});
}

exports.updateSchoolUser=function(req, res) {
  
  Schooluser.findOneAndUpdate({_id:req.body.schooluserId}, req.body.formvalue, {upsert: true}, function(err, doc) {
    if (err) return res.json({status: 100,message: "Error found"});
    // deleted at most one tank document
    res.json({status: 200,message: "schoolUpdated"});
});
}

exports.getSchoolInformation=function(req, res) {
  
  School.findById(req.params.schoolId, function(err, data) {
    if (!err){ 
      res.json({status: 200,data: data});
    } else {return res.json({status: 100,message: "Error found"});}
});
}
exports.updateSchool=function(req, res) {
  console.log(req.params.id);
  console.log(req.body);
  var path;
  if(req.file){
  
    path = 'http://localhost:3000/upload/'+req.file.originalname;
  }else{
    path='';
  }
  if(req.body.adminId){
    data.adminId=req.body.adminId;
  }
  var data={ name: req.body.fullName, registrationNumber: req.body.regNo, country: req.body.country,
    city:req.body.city,registrationDate:req.body.regDate,phoneNumber:req.body.phonenumber,email:req.body.emailaddress,
    address:req.body.address,logo:path,amount:req.body.amount,isActive:req.body.status,pay:req.body.pay};
  
    School.findOneAndUpdate({_id:req.params.id}, data, {upsert: true}, function(err, doc) {
    if (err)  return res.json({status: 100,message: "Error found"});
    // deleted at most one tank document
    res.json({status: 200,message: "schoolUpdated"});
});
}

exports.login = function(req, res) {
	const body = req.body;
	console.log(body);
	Schooluser.findOne({ userName: body.userName }, function(err, user) {
		if (err) {
		  res.json({status: 100,message: "Error found"});
		}
		if (user) {
		 if(user.password==body.password){
			 jwt.sign({userid:user._id  }, "UserDetail",{ expiresIn:'1m' },function(err, token) {
			  console.log("test"+token,user._id);
			  
			  res.json({status: 200,message: "Userfound",user:user,token:token});
			});
			 
		 }
		
		}else{
		 res.json({status: 201,message: "NoUserfound"});	
		}
	});

};