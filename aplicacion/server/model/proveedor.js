var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var proveedorSchema = new Schema({
   nit: {type: Number, required: true},
   empresa:{type: String, required: true} ,
   representante: {type: String, required: true},
   telefono:{type: Number, required: true},
   direccion: {type: String, required: true},
   usuario: { type: Schema.ObjectId, ref: "User" }
});

module.exports = mongoose.model('Proveedores', proveedorSchema);
