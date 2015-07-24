/// <reference path="../typings/tsd.d.ts"/>
'use strict';

var mocha = require('mocha');
var chai = require('chai');
var sinon = require('sinon');
var UserService = require('../services/userService');
var Repo = require('../data/mongooseRepository');
var sinonChai = require('sinon-chai');

var expect = chai.expect;
chai.should();
chai.use(sinonChai);


describe('user service', function () {
	var repo = new Repo();

	it('should add new user that does not exist', function (done) {
		var dbFindStub = sinon.stub(repo, "find").yields(null, null);
		var dbCreateStub = sinon.stub(repo, "create").yields(null, { id: 503 });
		var userService = new UserService(repo);
		userService.addUser(
			{
				name:
				{
					first: 'john',
					last: 'nystrom',
				},
				email: 'john@discovermoment.com'
			}, function (err, user) {
				expect(user.id).to.be.equal(503);
				dbFindStub.should.have.been.calledOnce;
				dbCreateStub.should.have.been.calledOnce;
				done();
			});

	});
	it('should not add new user if already exist', function (done) {
		repo.find.restore();
		var dbFindStub = sinon.stub(repo, "find1").yields(null, { id: 503 });
		var userService = new UserService(repo);
		userService.addUser(
			{
				name:
				{
					first: 'john',
					last: 'nystrom',
				},
				email: 'john@discovermoment.com'
			}, function (err, user) {
				expect(user.id).to.be.equal(503);
				dbFindStub.should.have.been.calledOnce;
				done();
			});

	});

});