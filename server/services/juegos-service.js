'use strict';
var async = require('asyncawait/async');
var await = require('asyncawait/await');
var JuegosRsrc = require(__base + 'server/infrastructure/resources').juego;

function getJuego(id) {
    var result;
    console.log('get Juego by ' + id);
    try {
        if(id){
            result = await (JuegosRsrc.getJuego(id));
        } else {
            result = await (JuegosRsrc.getJuegos());
        }
        console.log('result length ' + result.length);    
    } catch(error) {
        throw error;
    }
    return { juego: result };
}

function updateJuego(juego) {
    var result;
    console.log('update Juego by ' + juego._id);
    try {
        result = await (JuegosRsrc.updateJuego(juego));
        console.log('result length ' + result.length);    
    } catch(error) {
        throw error;
    }
    return { juego: result };
}

function deleteJuego(id) {
    var result;
    console.log('delete Juego by ' + id);
    try {
        result = await (JuegosRsrc.deleteJuego(id));
        console.log('result length ' + result.length);    
    } catch(error) {
        throw error;
    }
    return { juego: result };
}

function postJuego(juego) {
    var result;
    console.log('post Juego service',juego);
    try {
        result = await (JuegosRsrc.addJuego(juego));
        console.log('result length ' + result.length);    
    } catch(error) {
        throw error;
    }
    return { juego: result };
}

module.exports.getJuego = async(getJuego);
module.exports.updateJuego = async(updateJuego);
module.exports.deleteJuego = async(deleteJuego);
module.exports.postJuego = async(postJuego);