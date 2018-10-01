'use strict';
var await = require('asyncawait/await');
var async = require('asyncawait/async');
var handlers = require(__base + 'server/routes/router-handlers');
var service = require(__base + 'server/services');
var routes = require('express').Router();


function postLogin(request, response) {
    console.log('POST User',request.body);
    var result;
    try {
        result = await (service.usersService.getUserCedula(request.body.usuario.cedula, request.body.usuario.clave));
        console.log(result);
        return handlers.successResponseHandler(response, {
            'usuario': result.usuario,
        });
    } catch (error) {
    	console.log(error);
        if(error.code === 11000){
            return handlers.validationErrorHandler(response, error);
        }
        return handlers.errorResponseHandler(response, error);
    }
}

routes.post('/', async(postLogin));

module.exports = routes;