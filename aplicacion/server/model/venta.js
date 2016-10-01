var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Producto = require('./producto');

var ventaSchema = new Schema({
    fecha: Date,
    cliente: { type: Schema.ObjectId, ref: "Clientes" },
    usuario: { type: Schema.ObjectId, ref: "User" },
    detalle: [{
        cantidad: Number,
        precio :  Number,
        ganancia: Number,
        producto: { type: Schema.ObjectId, ref: "Productos" }
    }]
});

ventaSchema.post('save', function(doc) {
    var detalle = doc.detalle;
    detalle.forEach(function(det) {
        Producto.find({ _id: det.producto }).exec(function(error, producto) {
            Producto.update({ _id: producto[0]._id }, { $set: { existencia:(producto[0].existencia - det.cantidad) } }, function(err) {});
        });
    });

});

module.exports = mongoose.model('Ventas', ventaSchema);
