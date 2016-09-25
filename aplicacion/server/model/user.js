var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema({
  username: {type: String, required: 'El nombre de usuario es requerido'},
  password: {type: String, required: 'La contrasena es requerida'},
  nombre: {type: String, required: 'El nombre del usuario es requerido'},
  apellido: {type: String, required: 'El Apellido es requerido'},
  correo: {type: String, required: 'El correo es requerido'},
  permisos: [{
        id: { type: mongoose.Schema.Types.ObjectId, ref: 'Menu' }
    }]
});

User.plugin(passportLocalMongoose);
module.exports = mongoose.model('users', User);
