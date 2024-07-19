const { Router } = require('express');
const router = Router();
const Plato = require('../models/plato'); // Importa el modelo de plato
const Calificacion = require('../models/calificacion');
const Pedido = require('../models/pedido')


// Ruta para obtener los platos del menú
router.get('/menu', async (req, res) => {
    try {
        const platos = await Plato.find();
        res.json(platos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
// Ruta pública para crear un nuevo pedido
router.post('/pedido', async (req, res) => {
    try {
        const { nombres, apellidos, correo, direccion, detalles_pedido } = req.body;
        const nuevoPedido = new Pedido({ nombres, apellidos, correo, direccion, detalles_pedido });
        await nuevoPedido.save();
        res.status(201).json(nuevoPedido); // Devuelve el nuevo pedido como respuesta en formato JSON
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
// Ruta para crear una nueva calificación
router.post('/calificaciones', async (req, res) => {
    const { nombre_mesero, nombre_cliente, calificacion, comentario_adicional } = req.body;

    try {
        // Crear una nueva instancia de Calificacion con los datos recibidos
        const nuevaCalificacion = new Calificacion({
            nombre_mesero,
            nombre_cliente,
            calificacion,
            comentario_adicional
        });

        // Guardar la nueva calificación en la base de datos
        await nuevaCalificacion.save();

        res.status(201).json({ message: 'Calificación creada exitosamente', calificacion: nuevaCalificacion });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
