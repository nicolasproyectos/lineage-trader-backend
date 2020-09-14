const { Schema, model } = require('mongoose');

const VentaSchema = Schema({

    icono: {
        type: String
    },
    nombre: {
        type: String,
        required: true
    },
    tipo: {
        type: String, 
        required: true       
    },
    rango: {
        type: String
    },
    precio: {
        type: Object
    },
    mensaje: {
        type: String
    },
    caracteristicas: {
        type: Object
    }

});

VentaSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});



module.exports = model('venta', VentaSchema );