 exports.login= (req, res) => {
    const  userName  =  req.body.username;
    const  password  =  req.body.password;
    Admin.findOne({userName: userName,isDeleted:false,isActive:true}).exec( (err, user)=>{
        if (err) return   res.json({status:500,message:'Server error!'});
        if (!user) return res.json({status:404,message:'Incorrect username or Not authorized!'});
         //console.log(user)
        //const result  =  bcrypt.compareSync(password, user.password);
        if(password!==user.password) return  res.json({status:401 ,message:'You entered wrong Password'});              
         const userToken = user.generateAuthToken();
         
         const userinfo={fullName: `${user.firstName} ${user.lastName}`,isDeleted:user.isDeleted,role:user.role,_id:user._id};
       console.log(userinfo);
       if(!userToken || userToken==null) return res.json({status:500,message:'Authetication server error!'}); 
        return res.json({status:200,message:"Login successfully!" ,user:userinfo, "token":userToken});
    });
};

//REGISTER NEW USER
exports.registerAdmin = function(req, res) {
   console.log(req.body);
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
       Admin.findOne({$or: [{email: email},{userName:userName}]}).exec(function(err, user) {
        if (user){
          if(user.email == email) {
          	 console.log(req.body);
              return res.json({
              status: 401,
              message: "Email is ready taken!"
              });
          }else if(user.userName == userName){
              return res.json({
              status: 400,
              message: "Username is ready taken!"
              });
            }
        }else{
      //Everything is fine
      //set Request values to  model attributes 
      const adminUserData ={firstName,lastName,userName,password,role,email};
      console.log(adminUserData);
      //save the model data values
      const adminModel = new Admin(adminUserData);
      adminModel.save(function(err, user) {
        if(err){
           return res.json({
              status: 500,
              message: "Failed to register admin server error!"
           });
        }else {

          return res.json({
            status: 200,
            message: `Admin: ${user.firstName} ${user.lastName} is registered successfully  !`
          });
        }
      });

        }
         
      });
   
    }
  };

   exports.getAllAdmins=function (req,res){
    Admin.find({isDeleted:false}).select(" _id userName firstName lastName email role updatedAt isActive").exec(function(err, users) {
      if (err) return res.json({status:500,message:'Server error!'});
      else {
        return res.json({
          users: users,
          status: 200
        });	
      }
    });
  }


   exports.viewUser=function(req, res) {
    Admin.findById(req.params.id, function(err, data) {
      if (!err){ 
        res.json({status: 200,data: data});
      } else {return res.json({status: 500,message: "Server Error"});}
  });
  }

  exports.updateUser=function(req, res) {
  Admin.findOneAndUpdate({_id:req.params.id},req.body, {upsert: true}, function(err, doc) {
      if (err) return res.json({status: 500,message: "Server Error"});
      res.json({status: 200,message: `User ${doc.firstName} ${doc.lastName} updated successfully `});
  });
  }
