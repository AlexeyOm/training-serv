//var mongoose = require('mongoose');
//var Cat = require('../model/model');

exports.index = function(req, res){
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

	console.log("i'm in getprogramm");
	const jwork = [{reps : 6, rest : 1},{reps : 66, rest : 1},{reps : 666, rest : 1},{reps : 0, test: 1}];

	//const jwork = [{reps : 6, rest : 1},{reps : 15, test: true}];
	const work = 5;
	res.json(jwork);
  //res.send("respond with a resource");
};