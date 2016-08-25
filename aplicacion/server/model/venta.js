var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ventaSchema = new Schema({
   fecha: Date.now(),
   cliente: { type: Schema.ObjectId, ref: "Cliente" },
   usuario: { type: Schema.ObjectId, ref: "User" },
   detalleVenta: [{
         cantidad: Number,
         precio :  Number,
         ganancia: Number,
         producto: { type: Schema.ObjectId, ref: "Producto" }
      }]
});

module.exports = mongoose.model('Venta', ventaSchema);
