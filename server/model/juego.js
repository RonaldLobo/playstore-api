var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    nombre: { type: String, require: true },
    rating: { type: Number, require: true },
    categoria: { type: String, require: true }
},{ 
	versionKey: false 
});

module.exports = mongoose.model('juego', schema);
