var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var Academicyear = new Schema({
    yearName: Number,
	isDeleted:{type:Boolean,default:false},
    schooluserId:{type: mongoose.Schema.Types.ObjectId,ref:'Schooluser'}
},{
    timestamps: true
});



module.exports = mongoose.model('Academicyear', Academicyear);