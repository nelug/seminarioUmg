var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var compraSchema = new Schema({
   usuario: { type: Schema.ObjectId, ref: "User" },
   proveedor: { type: Schema.ObjectId, ref: "Proveedores" },
   numeroDocumento: String,
   fechaDocumento: Date,
   fecha: Date.now(),
   detalleCompra: [{
         cantidad: Number,
         precio :  Number,
         producto: { type: Schema.ObjectId, ref: "Productos" }
      }]
});

module.exports = mongoose.model('Compras', compraSchema);
