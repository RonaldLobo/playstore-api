'use strict';
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var express = require('express');


function configure(app) {
    app.use(bodyParser.json());
    app.set('view engine', 'html');
    console.log('loading content routes using static path to dist directory');
    app.use(express.static(__base + '/dist'));
    app.use(function(req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
          
        // intercept OPTIONS method
        if ('OPTIONS' == req.method) {
          res.send(200);
        }
        else {
          next();
        }
    });

    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(cookieParser());

    app.use(function(req, res, next) {
        res.locals.ip = req.headers['x-forwarded-for'] ||
            req.connection.remoteAddress ||
            req.socket.remoteAddress ||
            req.connection.socket.remoteAddress;
        next();
    });
}
module.exports = configure;