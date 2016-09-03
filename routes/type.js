/**
 * Created by SUSHANT on 16-05-2016.
 */
module.exports = function(app){

    var Type = require('../app/model/type');

    app.get('/api/type',function(req,res){
        // res.json({message:'dciubdciu'});
        Type.find({}).exec(function(err,answers){
            if (err)
                    res.send(err);

            res.json(answers);
        });
    });
    app.post('/api/type',function(req,res){

        var type = new Type();
        // set the bears name (comes from the request)
        //  type.name = req.body.description;  // set the bears name (comes from the request)
        type.battle_type = req.body.battle_type

        // res.json({ success: true ,data:req.body.name});
        type.save(function(err) {
            if (err)
                res.send(err);

            res.json({ success: true });
        });


    });
    


}
