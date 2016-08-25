var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var permisoSchema = new Schema({

   menu: { type: Schema.ObjectId, ref: "Menu" },
   usuario: { type: Schema.ObjectId, ref: "User" }
});

module.exports = mongoose.model('Permiso', permisoSchema);
