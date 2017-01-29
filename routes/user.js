const programm = require('./programm');
const minTimeBetweenTrainings = 16 * 60 * 60 * 1000; // 16 hours in milliseconds

exports.list = function(req, res){


	const jwork = [{reps : 6, rest : 1},{reps : 66, rest : 1},{reps : 666, rest : 1},{reps : 0, test: 1}];


	if(Date.now() - req.user.lastTraining < minTimeBetweenTrainings) {
		const timeToRest = req.user.lastTraining  + minTimeBetweenTrainings - Date.now();
		return res.json({timeToRest});
	}
	else {

	}

	

	//const jwork = [{reps : 6, rest : 1},{reps : 15, test: true}];
	const work = 5;
	res.json(jwork);
  //res.send("respond with a resource");
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