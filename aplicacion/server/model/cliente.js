var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var clienteSchema = new Schema({
    nit: {
    		type: Number,
            require: true,
    		validate: [
    		function(nit){
    		},
    		'El nit debe contener solo numeros']
    	},
    nombre : {type: String, required: true},
    direccion: {type: String, required: true},
    telefono:{type: Number, required: true},
    Usuario: { type: Schema.ObjectId, ref: "User" }
});

module.exports = mongoose.model('Clientes', clienteSchema);
