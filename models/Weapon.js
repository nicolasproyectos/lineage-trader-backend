const { Schema, model } = require('mongoose');

const WeaponSchema = Schema({

    nombre: {
        type: String,
        required: true
    },
    tipo: {
        type: String,        
    },
    rango: {
        type: String,
        required: true
    },
    icono: {
        type: String,
        required: true
    },
    SA: [{
        nombre: {
            type: String,
            required: true
        }
    }]

});

WeaponSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});



module.exports = model('Weapon', WeaponSchema );