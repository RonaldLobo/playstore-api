var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    nombre: { type: String, require: true },
    cedula: { type: String, require: true },
    apellido1: { type: String, require: true },
    email: { type: String, require: true },
    telefono: { type: String, require: true },
    clave: { type: String, require: true }
},{ 
	versionKey: false 
});

module.exports = mongoose.model('user', schema);
