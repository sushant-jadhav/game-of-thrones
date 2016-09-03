/**
 * Created by SUSHANT on 16-05-2016.
 */
module.exports = function(app){

    var List = require('../app/model/list');
    var Bettle = require('../app/model/battles');

    app.get('/list',function(req,res){
        // res.json({message:'dciubdciu'});
        List.find({}).populate('location').exec(function(err,lists){
            if (err)
                    res.send(err);

            res.json(lists);
        });
    });
    app.get('/count',function(req,res){
        // res.json({message:'dciubdciu'});
        Bettle.find({}).count(function(err,lists){
            if (err)
                    res.send(err);

            res.json({number_of_battles:lists});
        });
        
    });
    app.get('/stats',function(req,res){
        // res.json({message:'dciubdciu'});
        Bettle.find({}).exec(function(err,lists){
            if (err)
                    res.send(err);

            for(var attributename in lists){
                console.log(attributename+": "+lists[attributename]);
            }
        });
        
    });
    app.post('/api/list',function(req,res){

        var list = new List();
        // set the bears name (comes from the request)
        list.name = req.body.region_name;  // set the bears name (comes from the request)
        list.location = req.body.location_name;
        list.save(function(err){

            if(err){
                res.send(err);
            }
            res.json({success:true});

        });


    });
    

}
