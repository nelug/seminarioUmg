var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productoSchema = new Schema({
    codigo: String,
    descripcion : String,
    precio-venta: Number,
    precio-costo: Number,
    existencia: Number
    usuario: { type: Schema.ObjectId, ref: "User" }
});

module.exports = mongoose.model('Producto', productoSchema);
