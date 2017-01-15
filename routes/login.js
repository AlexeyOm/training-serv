//var mongoose = require('mongoose');
//var Cat = require('../model/model');

exports.index = function(req, res){

	const token = 'SoMeToKeN';
	if(req.body.login === 'test' && req.body.password === '123') {
		res.json(token);
	}
	else res.json('fail');
};