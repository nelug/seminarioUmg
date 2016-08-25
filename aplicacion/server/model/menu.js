var mongoose = require('mongoose');

module.exports = mongoose.model('Menu', {
	titulo: String,
	icono: String,
    link: String,
    catalogo: Number
});