var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var School = new Schema({
    name: String,
    email:String,
    registrationDate: Date,
    registrationNumber:String,
    logo:String,
    country:String,
    city:String,
    phoneNumber:String,
    address:String,
	isDeleted:{type:Boolean,default:false},
    isActive:{type:Boolean,default:true},
    adminId:{type: mongoose.Schema.Types.ObjectId,ref:'Admin'}
},{
    timestamps: true
});



module.exports = mongoose.model('School', School);