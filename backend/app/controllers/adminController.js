exports.login = function(req, res) {
	const body = req.body;
	console.log(body);
	Admin.findOne({ userName: body.userName }, function(err, user) {
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
  
 /* var token = jwt.sign({userID: admin.id}, 'usertoken', {expiresIn: '2h'});
  console.log(token);
  res.send({token});*/
};