var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var Admin = new Schema({
    userName:{type:String,required:true},
    password:{type:String,required:true},
	isDeleted:{type:Boolean,default:false},
	firstName:{type:String,required:true},
	lastName:{type:String,required:true},
	email:{type:String},
	role:{type:Number,required:true},/* 1 for admin,2 for officer,3 for manager*/
});

module.exports = mongoose.model('Admin', Admin);