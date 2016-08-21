var mongoose = require('mongoose');

module.exports = mongoose.model('Catalogo', {
	titulo: String,
	icono: String,
	estado: Number,
    link: String,
    catalogo: Number
});