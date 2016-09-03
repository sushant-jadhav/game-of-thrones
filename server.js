var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
var engines = require('consolidate');
var path = require('path');
var app = express();

//app.use(express.static(__dirname + '/public'));
//app.set('views', __dirname + '/public/views');
//

app.set('views', __dirname + '/views');
// app.engine('html', engines.mustache);
// app.set('view engine', 'html');
app.set('view engine', 'html');
app.set('port', process.env.OPENSHIFT_NODEJS_PORT || 8080);
app.set('ip', process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1');

app.use(express.bodyParser());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

var connection = mongoose.connect('mongodb://jonsnow:basterd@ds019936.mlab.com:19936/gameofthrones');


// autoIncrement.initialize(connection);

var battles = require('./routes/battles')(app);
var type = require('./routes/type')(app);
var region = require('./routes/region')(app);
var commander = require('./routes/commander')(app);
var location = require('./routes/location')(app);
var king = require('./routes/king')(app);
var list = require('./routes/list')(app);
// var question = require('./routes/question')(app);
// var answer = require('./routes/answer')(app);
// var tag = require('./routes/tag')(app);

http.createServer(app).listen(app.get('port'), app.get('ip'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});

app.get('/', function (req, res) {
    // res.sendFile(path.join(__dirname + '/index.html'));
  res.json({ message: 'hooray! welcome to our api section!' });
});
app.get('/about', function (req, res) {
    res.render(path.join(__dirname + '/about.html'));
  // res.json({ message: path.join(__dirname + '/index.html') });

});

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;

  next(err);
});


if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}
// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
