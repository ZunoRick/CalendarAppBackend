const express = require('express')
require('dotenv').config({ path: '.env'});

// Crear el servidor de express
const app = express()

// Directorio publico
app.use(express.static('public'))

// Rutas
app.use('/api/auth', require('./routes/auth'))

// Escuchar peticiones
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
})