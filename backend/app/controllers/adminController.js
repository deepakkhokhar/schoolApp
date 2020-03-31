const  jwt  =  require('jsonwebtoken');
//const  bcrypt  =  require('bcryptjs');
const saltRounds = 10;

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


//REGISTER NEW USER
exports.register = function(req, res) {
   const {firstName,lastName,userName,password,role,email}=req.body;
  
    if (!firstName || !lastName || !userName|| !password|| !role) {
      return res.json({ status: 401, message: "First Name,Last Name,Username,User Type are required!" });
     
    }else if (password !== req.body.confirmPassword) {
      return res.json({
        status: 401,
        message: "Password  and Confirm password must match !"
      });
    }
    else {
        //find if user exists
       Admin.findOne({$or: [{email: email},{userName:userName}]}).exec(function(err, admin) {
        if (admin){
          if(admin.email == email) {
              return res.json({
              status: 401,
              message: "Email is ready taken!"
              });
          }else if(admin.userName == userName){
              return res.json({
              status: 400,
              message: "Username is ready taken!"
              });
            }
        }else{
      //Everything is fine
      //set Request values to  model attributes 
      const adminUserData = {firstName ,lastName,email,userName,role};
      //save the model data values
      const adminModel = new Admin(adminUserData);
      adminModel.save(function(err, admin) {
        if(err){
           return res.json({
              status: 500,
              message: "Failed to register admin server error!"
           });
        }else {

          return res.json({
            data: admin,
            status: 200,
            message: `Admin: ${admin.firstName} ${admin.lastName} is registered successfully  !`
          });
        }
      });

        }
         
      });
   
    }
  };


    exports.getAllAdmins=function (req,res){
    Admin.find({})
    .exec(function(err, admin) {
      if (err) return res.json({status:500,message:'Server error!'});
      else {
        return res.json({
          data: admins,
          status: 200
        });
      }
    });
  }
