// BASE SETUP
// =============================================================================
// call the packages we need
///<reference path="typings/tsd.d.ts"/>

//require('newrelic');
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    request = require('request'),
    _ = require('underscore'),
    cors = require('cors'),
    config = require('./config')(),
    passport = require('passport'),
    BasicStrategy = require('passport-http').BasicStrategy;
   // log = require('./lib/log.js').log;
var Bootstrapper = require('./bootstrapper');

var isAuthenticated = configAuth();

var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With, steroidsAppId, steroidsApiKey, Authorization');
    res.header('Access-Control-Allow-Credentials', true);

    if ('OPTIONS' === req.method) {
       console.log("caught the options", true);
        res.statusCode = 204;
        res.end();
    } else {
        next();
    }
};

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var corsOptions = {
    allowedHeaders: 'Content-Type, X-Requested-With, steroidsAppId, steroidsApiKey, Authorization',
    origin: true,
    credentials: true
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions));

app.use(passport.initialize());

//setup IOC container
Bootstrapper.bootstrap();

//var UserController = require('./controllers/userController.js');


// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// router.use(allowCrossDomain)
// middleware to use for all requests
router.use(function (req, res, next) {
    // do logging
    console.log('API Request (' + req.method + ') ' + req.originalUrl, true);
    next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function (req, res) {
    res.json({
        message: 'hooray! welcome to our api!',
        version: '0.1.0',
        mode: config.mode
    });
});
var userController = Bootstrapper.ioc.get('userController');
router.get('/user/:userId', userController.getUser);


// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);


// START THE SERVER
// =============================================================================
app.listen(config.port);
console.log('Magic happens on port ' + config.port + ' in env ' + config.mode, true);


function configAuth() {
    passport.use(new BasicStrategy(
        function (username, password, done) {

            return done(null, { _id: 5, name: { first: 'john', last: 'nystrom' } });
        })
        );

    var isAuthenticated = passport.authenticate(['basic'], { session: false });
    return isAuthenticated;
}
