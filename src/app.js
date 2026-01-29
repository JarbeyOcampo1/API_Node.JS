const express = require('express');
const libroRoutes = require('./routers/libro.routes');

const app = express();
app.use(express.json());

app.use('/api/libros', libroRoutes);

module.exports = app;
