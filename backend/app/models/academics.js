var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var Academic = new Schema({
    className: String,
    stream:[{name:String,students:[{name:String}],level:{type: mongoose.Schema.Types.ObjectId,ref:'Academiclevel'}}],
	isDeleted:{type:Boolean,default:false},
    
    schooluserId:{type: mongoose.Schema.Types.ObjectId,ref:'Schooluser'}
},{
    timestamps: true
});



module.exports = mongoose.model('Academic', Academic);