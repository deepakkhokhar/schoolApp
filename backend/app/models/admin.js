var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var Admin = new Schema({
    userName: String,
    password: String,
	isDeleted:{type:Boolean,default:false},
	firstName:String,
	lastName:String,
});



module.exports = mongoose.model('Admin', Admin);