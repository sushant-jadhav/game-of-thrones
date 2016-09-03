/**
 * Created by SUSHANT on 03-09-2016.
 */
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
// var autoIncrement = require('mongoose-auto-increment');


var ListSchema = new Schema({
    name:String,
    location:[{type: mongoose.Schema.Types.ObjectId, ref: 'Location'}],
    created_at:{ type : Date, default: Date.now }
    
});


module.exports = mongoose.model('List',ListSchema);