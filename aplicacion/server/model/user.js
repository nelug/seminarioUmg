var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema({
  username: String,
  password: String,
  nombre: String,
  apellido: String,
  correo: String,
  permisos: [{
        id: { type: mongoose.Schema.Types.ObjectId, ref: 'Menu' }
    }]
});

User.plugin(passportLocalMongoose);
module.exports = mongoose.model('users', User);
