/**
 * Created by SUSHANT on 03-09-2016.
 */
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
// var autoIncrement = require('mongoose-auto-increment');


var TypeSchema = new Schema({
    battle_type:String,
    created_at:{ type : Date, default: Date.now }
    
});


module.exports = mongoose.model('Type',TypeSchema);