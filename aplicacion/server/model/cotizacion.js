var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cotizacionSchema = new Schema({
   fecha: Date.now(),
   cliente: { type: Schema.ObjectId, ref: "Cliente" },
   usuario: { type: Schema.ObjectId, ref: "User" },
   detalleCotizacion: [{
         cantidad: Number,
         precio :  Number,
         producto: { type: Schema.ObjectId, ref: "Productos" }
      }]
});

module.exports = mongoose.model('Cotizaciones', cotizacionSchema);
