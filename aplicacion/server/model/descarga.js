var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var descargaSchema = new Schema({
   usuario: { type: Schema.ObjectId, ref: "User" },
   nota: String,
   fecha: Date.now(),
   detalleDescarga: [{
         cantidad: Number,
         precio :  Number,
         producto: { type: Schema.ObjectId, ref: "Producto" }
      }]
});

module.exports = mongoose.model('Descarga', descargaSchema);