const express = require('express');
const router = express.Router();
const LibroController = require('../controllers/libro.controllers.js');

router.get('/', LibroController.obtenerTodos);
router.get('/:id', LibroController.obtenerPorId);
router.post('/', LibroController.crearLibro);
router.put('/:id', LibroController.actualizarLibro);
router.delete('/:id', LibroController.eliminar);

module.exports = router;
