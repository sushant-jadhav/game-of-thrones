/**
 * Created by SUSHANT on 16-05-2016.
 */
module.exports = function(app){

    var Region = require('../app/model/region');

    app.get('/api/region',function(req,res){
        // res.json({message:'dciubdciu'});
        Region.find({}).exec(function(err,answers){
            if (err)
                    res.send(err);

            res.json(answers);
        });
    });
    app.post('/api/region',function(req,res){

        var region = new Region();
        // set the bears name (comes from the request)
        region.name = req.body.region_name;  // set the bears name (comes from the request)
        
        region.save(function(err){
            if(err){
                res.send(err);
            }
            res.json({ success: true });
        });


    });
    


}
