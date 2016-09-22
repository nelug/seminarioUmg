var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productoSchema = new Schema({
    codigo: {type: String, required: true},
    descripcion : {type: String, required:true},
    marca : {type: String, required: true},
    precioVenta: {type: Number, required: true},
    precioCosto: {type: Number, required: true},
    existencia: {type: Number, required: true},
    usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Productos', productoSchema);
