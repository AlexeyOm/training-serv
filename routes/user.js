var mongoose = require('mongoose');
var Cat = require('../model/model');

exports.list = function(req, res){
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
	//const workout = [{reps : 6, rest : 2},{reps : 66, rest : 2},{reps : 666, rest : 2},{reps : 6666, report: true}];
	const workout = 5;
	res.json(workout);
  //res.send("respond with a resource");
};