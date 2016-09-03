/**
 * Created by SUSHANT on 03-09-2016.
 */
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;



var BattlesSchema = new Schema({
    name:String,
    year:Number,
    battle_number:Number,
    attacker_king:{type: mongoose.Schema.Types.ObjectId, ref: 'King'},
    defender_king:{type: mongoose.Schema.Types.ObjectId, ref: 'King'},
    attacker_outcome:String,
    attacker_1:String,
    attacker_2:String,
    attacker_3:String,
    attacker_4:String,
    defender_1:String,
    defender_2:String,
    defender_3:String,
    defender_4:String,
    major_death:Number,
    major_capture:Number,
    attacker_size:Number,
    defender_size:Number,
    attacker_commander:[{type: mongoose.Schema.Types.ObjectId, ref: 'Commander'}],
    defender_commander:[{type: mongoose.Schema.Types.ObjectId, ref: 'Commander'}],
    summer:Number,
    location:{type: mongoose.Schema.Types.ObjectId, ref: 'Location'},
    bettle_type:{type: mongoose.Schema.Types.ObjectId, ref: 'Type'},
    region:{type: mongoose.Schema.Types.ObjectId, ref: 'Region'},
    note:String,
    created_at:{ type : Date, default: Date.now }
});

// AnswerSchema.plugin(autoIncrement.plugin, {
//     model: 'Answer',
//     field: 'answerId',
//     startAt: 1,
//     incrementBy: 1
// });

module.exports = mongoose.model('Battles',BattlesSchema);