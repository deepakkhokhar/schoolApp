var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var Expense = new Schema({
    name: String,
    payer: String,
    payee: String,
    description: String,
    amount:Number,
    isDeleted:{type:Boolean,default:false},
    schoolId:{type: mongoose.Schema.Types.ObjectId,ref:'School'},
    expensecategoryId:{type: mongoose.Schema.Types.ObjectId,ref:'Expensecategory'},
    adminId:{type: mongoose.Schema.Types.ObjectId,ref:'Admin'},
    schooluserId:{type: mongoose.Schema.Types.ObjectId,ref:'Schooluser'}
},{
    timestamps: true
});



module.exports = mongoose.model('Expense', Expense);