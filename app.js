
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var login = require('./routes/login');
var sendMail = require('./routes/sendmail');
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser')
var cors = require('cors');


var app = express();

var methodOverride = require('method-override');

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());


// create application/json parser 
var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser 
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);


app.use('/api/users', jsonParser, function (req, res, next) {
  if (!req.body) return res.sendStatus(400)
  next();//res.json(req.body.age);
});
app.use('/api/users', user.list);


app.use('/api/login', jsonParser, function (req, res, next) {
  if (!req.body) return res.sendStatus(400)
  next();//res.json(req.body.age);
});
app.use('/api/login', login.index);

app.use('/sendmail', sendMail.index);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
