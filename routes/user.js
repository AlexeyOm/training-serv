const program = require('./getprog').program;
const minTimeBetweenTrainings = 16 * 60 * 60 * 1000; // 16 hours in milliseconds

exports.list = function(req, res){

	if(Date.now() - req.user.lastTraining < minTimeBetweenTrainings) {
		const timeToRest = req.user.lastTraining + minTimeBetweenTrainings - Date.now();
		return res.json({timeToRest});
	}
	else {
		 //на основе недели, дня и теста выбираем программу для отправки
		 return res.json(program[req.user.week][req.user.day][req.user.level].workout);
	}

	res.json(jwork);
};


//var mongoose = require('mongoose');
//var Cat = require('../model/model');


	//console.log(Cat);
	//var Cat = mongoose.model('Cat', { name: String });

	// var kitty = new Cat({ name: req.body.name });
	// kitty.save(function (err) {
	//   if (err) {
	//     console.log(err);
	//   } else {
	//     console.log('meow');
	//   }
	// });