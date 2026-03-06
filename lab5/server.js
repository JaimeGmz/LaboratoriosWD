const express = require('express');
const cors = require('cors');
const clienteRoutes = require('./routes/clienteRoutes');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
// Middleware
app.use(cors());
app.use(express.json());
// Rutas
app.use('/api/clientes', clienteRoutes);
// Ruta de inicio
app.get('/', (req, res) => {
    res.send('API de Clientes funcionando correctamente con MySQL');
});
// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

app.use('/api/clientes', clienteRoutes);