'use strict';
var await = require('asyncawait/await');
var async = require('asyncawait/async');
var handlers = require(__base + 'server/routes/router-handlers');
var service = require(__base + 'server/services');
var routes = require('express').Router();


function getJuegos(request, response) {
    console.log('GET Juego');
    var result;
    try {
        result = await (service.juegosService.getJuego(request.params.id));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        console.log('error',error);
        return handlers.errorResponseHandler(response, error);
    }
}

function deleteJuego(request, response) {
    console.log('DELETE Juego');
    var result;
    try {
        result = await (service.juegosService.deleteJuego(request.params.id));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        return handlers.errorResponseHandler(response, error);
    }
}

function updateJuego(request, response) {
    console.log('UPDATE Juego');
    var result;
    try {
        result = await (service.juegosService.updateJuego(request.body.juego));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        return handlers.errorResponseHandler(response, error);
    }
}

function postJuego(request, response) {
    console.log('POST Juego',request.body);
    var result;
    try {
        result = await (service.juegosService.postJuego(request.body.juego));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        if(error.code === 11000){
            return handlers.validationErrorHandler(response, error);
        }
        return handlers.errorResponseHandler(response, error);
    }
}

routes.get('/:id', async(getJuegos));
routes.get('/', async(getJuegos));
routes.delete('/:id', async(deleteJuego));
routes.put('/:id', async(updateJuego));
routes.post('/', async(postJuego));

module.exports = routes;