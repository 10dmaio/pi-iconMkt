const express = require('express');

const clienteRoutes = require('./routes/clienteRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes');
const contratoRoutes = require('./routes/contratoRoutes');
const niveldeAcessoRoutes = require('./routes/niveldeAcessoRoutes');

const app = express();

app.use('/iconmarketing', clienteRoutes);
app.use('/iconmarketing', usuarioRoutes);
app.use('/iconmarketing', contratoRoutes);
app.use('/iconmarketing', niveldeAcessoRoutes)

module.exports = app;