var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var compraSchema = new Schema({
   usuario: { type: Schema.ObjectId, ref: "User" },
   proveedor: { type: Schema.ObjectId, ref: "Proveedor" },
   numeroDocumento: String,
   fechaDocumento: Date,
   fecha: Date.now(),
   detalleCompra: [{
         cantidad: Number,
         precio :  Number,
         producto: { type: Schema.ObjectId, ref: "Producto" }
      }]
});

module.exports = mongoose.model('Compra', compraSchema);
