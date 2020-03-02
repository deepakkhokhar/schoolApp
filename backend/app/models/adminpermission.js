var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var Adminpermission = new Schema({
	addSchool:{type:Boolean,default:true},
    addAccount:{type:Boolean,default:true},
    addExpenseCategory:{type:Boolean,default:true},
    addExpense:{type:Boolean,default:true},
    role:String
});



module.exports = mongoose.model('Adminpermission', Adminpermission);