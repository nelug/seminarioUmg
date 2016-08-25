var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var clienteSchema = new Schema({
    cantidad: Number,
    precio : Number,
    ganancia: Number,
    producto: { type: Schema.ObjectId, ref: "producto" }
});

module.exports = mongoose.model('Cliente', clienteSchema);
