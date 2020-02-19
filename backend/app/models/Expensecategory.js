var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var Expensecategory = new Schema({
    name: String,
    quantity:Number,
    description: String,
	isDeleted:{type:Boolean,default:false},
    adminId:{type: mongoose.Schema.Types.ObjectId,ref:'Admin'},
    schooluserId:{type: mongoose.Schema.Types.ObjectId,ref:'Schooluser'}
},{
    timestamps: true
});



module.exports = mongoose.model('Expensecategory', Expensecategory);