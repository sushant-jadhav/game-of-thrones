/**
 * Created by SUSHANT on 16-05-2016.
 */
module.exports = function(app){

    var Commander = require('../app/model/Commander');

    app.get('/api/commander',function(req,res){
        // res.json({message:'dciubdciu'});
        Commander.find({}).exec(function(err,answers){
            if (err)
                    res.send(err);

            res.json(answers);
        });
    });
    app.post('/api/commander',function(req,res){

        var commander = new Commander();
        // set the bears name (comes from the request)
        commander.name = req.body.commander_name;  // set the bears name (comes from the request)
        commander.save(function(err){

            if(err){
                res.send(err);
            }
            res.json({success:true});

        });


    });
    


}
