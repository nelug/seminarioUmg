var mongoose = require('mongoose');

module.exports = mongoose.model('Menu', {
	titulo: String,
	icono: String,
	estado: Number,
    link: String,
    permisos: Number
});