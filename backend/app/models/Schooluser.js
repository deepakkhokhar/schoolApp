var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var Schooluser = new Schema({
    firstName: String,
    lastName:String,
    userName: String,
    emailaddress:String,
    password:String,
    usertype:String,//1-accountant,2-academic,3-administrator,4-secretaty
	isDeleted:{type:Boolean,default:false},
    isActive:{type:Boolean,default:true},
    adminId:{type: mongoose.Schema.Types.ObjectId,ref:'Admin'},
    schoolId:{type: mongoose.Schema.Types.ObjectId,ref:'School'},
    schooluserId:{type: mongoose.Schema.Types.ObjectId,ref:'Schooluser'}
},{
    timestamps: true
});



module.exports = mongoose.model('Schooluser', Schooluser);