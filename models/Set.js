const { Schema, model } = require('mongoose');

const SetSchema = Schema({

    helmet: {
        type: Schema.Types.ObjectId,
        ref: 'Armor'
    },
    armor: {
        type: Schema.Types.ObjectId,
        ref: 'Armor'
    },
    pants: {
        type: Schema.Types.ObjectId,
        ref: 'Armor'     
    },
    gloves: {
        type: Schema.Types.ObjectId,
        ref: 'Armor'
    },
    boots: {
        type: Schema.Types.ObjectId,
        ref: 'Armor'
    }

});

SetSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});



module.exports = model('set', SetSchema );