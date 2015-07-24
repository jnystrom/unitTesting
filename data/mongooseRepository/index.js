/// <reference path="../../typings/tsd.d.ts"/>
var mongoose = require('mongoose');
var userModel = require('./models/user');

var MongooseRepository = function (mongoUrl) {
	console.log('the url: ' + mongoUrl);
	
	mongoose.connect(mongoUrl);
	this.find = function (typeName, queryObject, next) {
		//call mongoose find
		getMongooseType(typeName).find(queryObject, function(err, results){
			if(err){
				console.log('error getting user: ' + err);
				return next(err);
			}
			if(results && results.length > 0){
				console.log("GOT USER! " + results[0].name.first);
			}
			return next(null, results);
		});
	};

	this.create = function (typeName, queryObject, next) {
		//call mongoose find
		getMongooseType(typeName).find(queryObject, next);
		next(null, null);
	};

	function getMongooseType(typeName) {

		switch (typeName) {
			case 'User':
				return userModel.user;
				break;

		}
	}

};

module.exports = MongooseRepository;