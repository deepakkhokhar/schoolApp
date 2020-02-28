exports.schoolUserLogin= (req, res) => {
    const  username  =  req.body.username;
    const  password  =  req.body.password;
    Schooluser.findOne({userName: username}).exec( (err, user)=>{
        if (err) return   res.json({status:500,message:'Server error!'});
        if (!user) return res.json({status:404,message:'Incorrect username!'});
         console.log(user)
        //const result  =  bcrypt.compareSync(password, user.password);
        if(password!==user.password) return  res.json({status:401 ,message:'You entered wrong Password'});              
         const userToken = user.generateAuthToken();
         console.log(userToken);
       if(!userToken || userToken==null) return res.json({status:500,message:'Authetication server error!'}); 
        return res.json({status:200,message:"Login successfully!" , "authToken":  userToken});
    });
};