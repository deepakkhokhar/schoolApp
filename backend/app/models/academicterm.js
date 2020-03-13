var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var Academicterm = new Schema({
    frommonth: String,
    tomonth: String,
	isDeleted:{type:Boolean,default:false},
    schooluserId:{type: mongoose.Schema.Types.ObjectId,ref:'Schooluser'}
},{
    timestamps: true
});



module.exports = mongoose.model('Academicterm', Academicterm);