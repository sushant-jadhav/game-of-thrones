/**
 * Created by SUSHANT on 16-05-2016.
 */
module.exports = function(app){

    var Bettle = require('../app/model/battles');
    var Type = require('../app/model/type');
    var King = require('../app/model/King');
    var Commander = require('../app/model/Commander');
    var Location = require('../app/model/location');
    var Region = require('../app/model/region');


    app.get('/api/battels',function(req,res){
        // res.json({message:'dciubdciu'});
        Bettle.find({}).populate('defender_king').populate('location').populate('region').populate('attacker_king').populate('attacker_commander').populate('defender_commander').exec(function(err,answers){
            if (err)
                    res.send(err);
                // var options = {
                //   path: 'defender_commander',
                //   model: 'Commander'
                // };
                // Battle.populate(answers, options, function (err, answers) {
                //   res.json(answers);
                // });

            res.json(answers);
        });
    });
    app.post('/api/battle',function(req,res){

        var battle = new Bettle();      // create a new instance of the Bear model
        // var type = new Type();
        // var king = new King();
        var commander = new Commander();
        // var region = new Region();
        // var location = new Location();
        // set the bears name (comes from the request)

        battle.name = req.body.name;
        battle.year = req.body.year;
        battle.battle_number = req.body.battle_number;
        battle.attacker_king = req.body.attacker_king;
        battle.defender_king = req.body.defender_king;
        battle.attacker_outcome = req.body.attacker_outcome;
        battle.attacker_1 = req.body.attacker_1;
        battle.attacker_2 = req.body.attacker_2;
        battle.attacker_3 = req.body.attacker_3;
        battle.attacker_4 = req.body.attacker_4;
        battle.defender_1 = req.body.defender_1;
        battle.defender_2 = req.body.defender_2;
        battle.defender_3 = req.body.defender_3;
        battle.defender_4 = req.body.defender_4;
        battle.major_death = req.body.major_death;
        battle.major_capture = req.body.major_capture;
        battle.attacker_size = req.body.attacker_size;
        battle.defender_size = req.body.defender_size;
        battle.attacker_commander = req.body.attacker_commander;
        battle.defender_commander = req.body.defender_commander;
        battle.summer = req.body.summer;
        battle.location = req.body.location;
        battle.bettle_type = req.body.bettle_type;
        battle.region = req.body.region;
        battle.note = req.body.note;
        console.log('commander',req.body.attacker_commander);
        // res.json({data:battle});
        battle.save(function(err){
            if(err){
                res.send({error:'Error in Post'});
            }
            res.json({ success: true });
        });

        // res.json({success:true,data:req.body});
    });
    // app.get('/list',function(req,res){
    //     Bettle.find({}).exec(function(err,answers){
    //         if (err)
    //                 res.send(err);
                

    //         res.json({success:answers.length});
    //     });
        
    // });
    


}
