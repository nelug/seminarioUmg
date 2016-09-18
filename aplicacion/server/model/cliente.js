var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var clienteSchema = new Schema({
    nit: Number,
    nombre : String,
    direccion: String,
    telefono: Number,
    Usuario: { type: Schema.ObjectId, ref: "User" }
});

module.exports = mongoose.model('Clientes', clienteSchema);
