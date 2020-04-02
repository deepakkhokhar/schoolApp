//const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const saltRounds=10;
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var Admin = new Schema({
    userName:{type:String,required:true},
    password:{type:String,required:true},
	isDeleted:{type:Boolean,default:false},
	isActive:{type:Boolean,default:true},
	firstName:{type:String,required:true},
	lastName:{type:String,required:true},
	email:{type:String},
	role:{type:Number,required:true},/* 1 for admin,2 Manager,3 School Officer*/
	userToken:{type:String ,require:false}
},{
    timestamps: true
});

//  Admin.pre("save", function(next) {
//   this.password = bcrypt.hashSync(this.password, saltRounds);
//   next();
// });

Admin.methods.generateAuthToken = function() {
    // Generate an auth token for the user
    const user = this
    const expiresIn  =24*60*60;
    const accessToken  =  jwt.sign({userid:user._id},'UserDetail', {
           expiresIn:  expiresIn
        });
    user.userToken =accessToken
    //user.save()
    return user.userToken;
}

module.exports = mongoose.model('Admin', Admin);