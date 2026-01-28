const Libro = require('../models/libro.model');

// clase libro para manejar las operaciones de la base de datos
class LibroRepository {
    async  obtenerTodos() {
        return await Libro.findAll();
    };

    async obtenerPorId(IDlibro) {
        return await Libro.findByPk(IDlibro);
    };

    async crearLibro(libro) {
        return await Libro.create(libro);
    };

    async actualizarLibro(IDlibro, datos) {
        const libro = await Libro.findByPk(IDlibro);
        if (!libro) return null;
        return await libro.update(datos);
    };

    async eleminarLibro(IDlibro) {
        const libro = await Libro.findByPk(IDlibro);
        if (!libro) return null;
        await libro.destroy();
        return libro;
    };
}

// exportacion de la clase libro
module.exports = new LibroRepository();