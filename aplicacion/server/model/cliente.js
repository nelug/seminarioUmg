var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var clienteSchema = new Schema({
    nit: {type: String, required: 'El nit es requerido'},
    nombre : {type: String, required: 'El nombre es requerido', maxlength:[50, 'el nomrbre de usuario es demasiado largo']},
    direccion: {type: String, required:'Direccion es requerida', maxlength:[30, 'la direccion es demasiado larga']},
    telefono:{type: Number, required: 'Telefono es requerido y debe ser Numerico'},
    correo:{type: String, maxlength:[50, 'el correo es invalido o demasiado largo']},
    Usuario: { type: Schema.ObjectId, ref: "User" }
});

module.exports = mongoose.model('Clientes', clienteSchema);
