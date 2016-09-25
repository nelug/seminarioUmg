var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var proveedorSchema = new Schema({
   nit: {type: Number, required: 'El nit es requerido'},
   empresa:{type: String, required: 'El nombre de la empresa es requerido', maxlength:[30, 'el nombre de la empresa es demasiado largo']} ,
   representante: {type: String, required: 'El representante es requerido', maxlength:[40, 'el nombre es demasiado largo']},
   telefono:{type: Number, required: 'Numero de telefono es requerido'},
   direccion: {type: String, required: 'La direccion es requiida', maxlength:[30,'la direccion es requerida']},
   usuario: { type: Schema.ObjectId, ref: "User" }
});

module.exports = mongoose.model('Proveedores', proveedorSchema);
