var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var proveedorSchema = new Schema({
   nit: Number,
   empresa: String,
   representante: String,
   telefono: Number,
   direccion: String,
   usuario: { type: Schema.ObjectId, ref: "User" }
});

module.exports = mongoose.model('Proveedores', proveedorSchema);
