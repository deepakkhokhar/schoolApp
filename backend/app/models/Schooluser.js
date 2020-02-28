//const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const saltRounds=10;
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var Schooluser = new Schema({
    firstName:{type:String, require:true} ,
    lastName: {type:String, require:true},
    userName:  {type:String, require:true},
    emailaddress:String,
    password:{type:String, require:true},
    usertype:{type:String, require:true},//1-accountant,2-academic,3-administrator
	isDeleted:{type:Boolean,default:false},
    isActive:{type:Boolean,default:true},
    adminId:{type: mongoose.Schema.Types.ObjectId,ref:'Admin'},
    schoolId:{type: mongoose.Schema.Types.ObjectId,ref:'School'},
    userToken:{type:String ,require:false}
},{
    timestamps: true
});


//  Schooluser.pre("save", function(next) {
//   this.password = bcrypt.hashSync(this.password, saltRounds);
//   next();
// });
 
Schooluser.methods.generateAuthToken = function() {
    // Generate an auth token for the user
    const user = this
    const expiresIn  =24*60*60;
    const userinfo={fullName: `${user.firstName} ${user.lastName}`};
    const accessToken  =  jwt.sign({dashboard:"schoolDash",id:user._id,schoolId:user.schoolId,role:user.usertype,fullName:userinfo},'authKey', {
           expiresIn:  expiresIn
        });
    user.userToken =accessToken
    //user.save()
    return user.userToken;
}
module.exports = mongoose.model('Schooluser', Schooluser);