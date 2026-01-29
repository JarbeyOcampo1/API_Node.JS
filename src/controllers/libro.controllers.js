const libroRepo = require('../repositories/libro.repositorie');

class LibroController {
    async obtenerTodos(req, res) {
        const libros = await libroRepo.obtenerTodos();
        res.json(libros);
    }

    async obtenerPorId (req, res) {
        const libro = await libroRepo.obtenerPorId(req.params.IDlibro);
        libro ? res.json(libro) : res.status(400).send('Libro no encontrado');
    }

    async crearLibro (req, res) {
        const nuevoLibro = await libroRepo.crearLibro(req.body);
        res.status(201).json(nuevoLibro);
    }

    async actualizarLibro (req, res) {
        const libro = await libroRepo.obtenerPorId(req.params.IDlibro);
        libro ? res.json(libro) : res.status(400).send('libro no encontrado');
    }

    async eliminar (req, res) {
        const libro = await libroRepo.obtenerPorId(req.params.IDlibro);
        libro ? res.send('Libro eliminado') : res.status(404).send('Libro no encontrado');
    }
}
module.exports = new LibroController ();