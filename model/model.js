var mongoose = require('mongoose');

var db = mongoose.createConnection('mongodb://localhost/test');

var schema = mongoose.Schema({ name: 'string' });
var Cat = db.model('Cat', schema);
console.log('db and model loaded');

module.exports = Cat; 