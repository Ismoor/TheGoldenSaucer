const { Schema, model } = require('mongoose');

const calificacionSchema = new Schema({
    nombre_mesero: { type: String, required: true },
    nombre_cliente: { type: String, required: true },
    calificacion: { 
        type: String, 
        enum: ['excelente', 'muy bueno', 'bueno', 'regular', 'malo'], 
        required: true 
    },
    comentario_adicional: { type: String, default: '' }
});

module.exports = model('calificacion', calificacionSchema);