var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var proveedorSchema = new Schema({
   usuario: { type: Schema.ObjectId, ref: "User" },
   nit: Number,
   empresa: String,
   representante: String,
   telefono: Number,
   direccion: String
});

module.exports = mongoose.model('Proveedor', proveedorSchema);
