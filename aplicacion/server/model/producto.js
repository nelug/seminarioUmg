var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productoSchema = new Schema({
    codigo: String,
    descripcion : String,
    marca : String,
    precioVenta: Number,
    precioCosto: Number,
    existencia: Number,
    usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Producto', productoSchema);
