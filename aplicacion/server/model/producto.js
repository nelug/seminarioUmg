var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productoSchema = new Schema({
    codigo: {type: String, required: 'Codigo debe ser requerido'},
    descripcion : {type: String, required:'Descripcion debe de ser requerida', maxlength: [50, 'la descripcion es demasiado larga']},
    marca : {type: String, required: 'La marca es requerida', maxlength:[25, 'la marca es demasiado larga']},
    precioVenta: {type: Number, required: 'El precio de venta es requerido'},
    precioCosto: {type: Number, required: 'El precio de costo es requerido'},
    existencia: {type: Number, required: 'El numero de existencia es requerido'},
    usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Productos', productoSchema);
