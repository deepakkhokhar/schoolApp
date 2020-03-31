var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var Admin = new Schema({
    userName:{type:String,required:true},
    password:{type:String,requred:true},
	isDeleted:{type:Boolean,default:false},
	firstName:{type:String,requred:true},
	lastName:{type:String,requred:true},
	email:{type:String},
	role:{type:Number,required:true},/* 1 for admin,2 for officer,3 for manager*/
});

module.exports = mongoose.model('Admin', Admin);