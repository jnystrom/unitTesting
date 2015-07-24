///<reference path="../typings/tsd.d.ts""/>
var config = require('../config')();

var Forge = require('forge-di');
var MongooseRepository = require('../data/mongooseRepository');
var UserService = require('../services/UserService');
var UserController = require('../controllers/userController');

var forge = new Forge();

exports.bootstrap = function () {
	forge.bind('repository').to.type(MongooseRepository).with({ mongoUrl: config.mongoUrl });
	console.log("bound repository");
	forge.bind('userService').to.type(UserService);
	console.log("bound userService");
	forge.bind('userController').to.type(UserController);
	console.log("bound userController");
};
exports.ioc = forge;