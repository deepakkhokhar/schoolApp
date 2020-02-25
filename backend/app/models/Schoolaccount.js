var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var Schoolaccount = new Schema({
    amountType:{type:Number,required:true},/* 1 for credit,2 for debit*/
    description: String,
    amount:Number,
	isDeleted:{type:Boolean,default:false},
    isActive:{type:Boolean,default:true},
    adminId:{type: mongoose.Schema.Types.ObjectId,ref:'Admin'},
    schoolId:{type: mongoose.Schema.Types.ObjectId,ref:'School'},
    creditdebitDate: Date, 
    startDate: Date,
    endDate: Date,
    voucherNo: String,
    voucherType: String
},{
    timestamps: true
});



module.exports = mongoose.model('Schoolaccount', Schoolaccount);