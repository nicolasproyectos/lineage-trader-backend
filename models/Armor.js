const { Schema, model } = require('mongoose');

const ArmorSchema = Schema({

    nombre: {
        type: String,
        required: true
    },
    tipo: {
        type: String,
        required: true     
    },
    rango: {
        type: String,
        required: true
    },
    icono: {
        type: String,
        required: true
    },

});

ArmorSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});



module.exports = model('Armor', ArmorSchema );