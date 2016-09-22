var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var clienteSchema = new Schema({
    nit: {type: Number, required: true},
    nombre : {type: String, required: true},
    direccion: {type: String, required:  [true, 'direccion no sirve']},
    telefono:{type: Number, required: true},
    Usuario: { type: Schema.ObjectId, ref: "User" }
});

module.exports = mongoose.model('Clientes', clienteSchema);
