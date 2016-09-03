/**
 * Created by SUSHANT on 03-09-2016.
 */
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
// var autoIncrement = require('mongoose-auto-increment');


var KingSchema = new Schema({
    name:String,
    created_at:{ type : Date, default: Date.now }
    
});


module.exports = mongoose.model('King',KingSchema);