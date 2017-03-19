var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');
mongoose.Promises = global.promises;

exports.conn = mongoose.connection;
//
