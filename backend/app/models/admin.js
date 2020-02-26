var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var Admin = new Schema({
    userName: String,
    password: String,
	isDeleted:{type:Boolean,default:false},
	firstName:String,
	lastName:String,
	role:{type:Number,required:true},/* 1 for admin,2 for officer,3 for manager*/
});



module.exports = mongoose.model('Admin', Admin);