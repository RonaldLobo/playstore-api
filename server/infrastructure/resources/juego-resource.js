var async = require('asyncawait/async');
var await = require('asyncawait/await');
var juegoModel = require(__base + 'server/model/juego');

function getJuegos() {
    var juegos = await(juegoModel.find({}));
    return juegos;
}

function getJuego(id) {
    var juego = await(juegoModel.findOne({_id:id}));
    return juego;
}

function deleteJuego(id) {
    var juego = await(juegoModel.remove({_id:id}));
    return juego;
}

function updateJuego(juegoParam) {
    var juego = await(juegoModel.update({_id:juegoParam._id},juegoParam));
    return juego;
}

function addJuego(juegoParam) {
    var juego = await(juegoModel.create(juegoParam));
    return juego;
}

module.exports = {
    getJuegos: async(getJuegos),
    getJuego: async(getJuego),
    deleteJuego: async(deleteJuego),
    updateJuego: async(updateJuego),
    addJuego: async(addJuego)
};