/// <reference path="../typings/tsd.d.ts"/>
'use strict';

var mocha = require('mocha');
var chai = require('chai');
var sinon = require('sinon');
var UserService = require('../services/userService');
var UserController = require('../controllers/userController');
var sinonChai = require('sinon-chai');

var expect = chai.expect;
chai.should();
chai.use(sinonChai);


describe('user controller', function () {
var service = new UserService();
	var serviceGetUserStub = sinon.stub(service, "getUser").yields(null, {name:{first:'awesome'}});
	var userController = new UserController(service);
	it('should add new user', function (done) {
		userController.getUser({params:{userId:15}}, {json: function(obj){ expect(obj.name.first).to.be.string('awesome');}});
		serviceGetUserStub.should.have.been.calledOnce;
		done();
	});

});