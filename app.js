const express = require('express');
const app = express();
const port = 4000;

app.use(express.json());

const activosRouter = require('./routes/activos');
const responsablesRouter = require('./routes/responsables');
const ubicacionesRouter = require('./routes/ubicaciones');

app.use('/activos', activosRouter);
app.use('/responsables', responsablesRouter);
app.use('/ubicaciones', ubicacionesRouter);

app.get('/', (req, res) => {
    res.send('Meta 3.2 Implementar servicio de web REST usando rutas')
});

app.listen(port, () => {
    console.log('Servidor escuchando puerto: ', port)
}).on('error', err => {
    console.log('Error al iniciar servidor: ', err)
});