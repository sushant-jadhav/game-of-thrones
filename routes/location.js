/**
 * Created by SUSHANT on 16-05-2016.
 */
module.exports = function(app){

    var Location = require('../app/model/location');

    app.get('/api/location',function(req,res){
        // res.json({message:'dciubdciu'});
        Location.find({}).exec(function(err,answers){
            if (err)
                    res.send(err);

            res.json(answers);
        });
    });
    app.post('/api/location',function(req,res){

        var location = new Location();

        location.name = req.body.location_name;

        location.save(function(err){
            if(err){
                res.send(err);
            }
            res.json({ success: true });
        });
        


    });
    


}
