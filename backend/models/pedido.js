const { Schema, model } = require('mongoose');

// Definición del esquema para el modelo Pedido
const pedidoSchema = new Schema({
    nombres: { type: String, required: true },
    apellidos: { type: String, required: true },
    correo: { type: String, required: true },
    direccion: { type: String, required: true },
    detalles_pedido: { type: String, required: true } // Puedes cambiar esto a un objeto o arreglo si necesitas más detalle
}, {
    timestamps: true // Agrega campos createdAt y updatedAt
});

// Exporta el modelo Pedido basado en el esquema
module.exports = model('Pedido', pedidoSchema);
