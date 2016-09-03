/**
 * Created by SUSHANT on 16-05-2016.
 */
module.exports = function(app){

    var King = require('../app/model/King');

    app.get('/api/king',function(req,res){
        // res.json({message:'dciubdciu'});
        King.find({}).exec(function(err,answers){
            if (err)
                    res.send(err);

            res.json(answers);
        });
    });
    app.post('/api/king',function(req,res){

        var king = new King();
        // set the bears name (comes from the request)
        king.name = req.body.king_name;  // set the bears name (comes from the request)
        king.save(function(err){

            if(err){
                res.send(err);
            }
            res.json({success:true});

        });


    });
    


}
