var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var Academiclevel = new Schema({
    LevelName: String,
	isDeleted:{type:Boolean,default:false},
    schooluserId:{type: mongoose.Schema.Types.ObjectId,ref:'Schooluser'},
    subjects:[{name:String,isDeleted:{type:Boolean,default:false} }]
},{
    timestamps: true
});



module.exports = mongoose.model('Academiclevel', Academiclevel);