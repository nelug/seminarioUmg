var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productoSchema = new Schema({
    codigo: String,
    descripcion : String,
    precio-venta: Number,
    precio-costo: Number,
    existencia: Number
});

module.exports = mongoose.model('producto', productoSchema);
