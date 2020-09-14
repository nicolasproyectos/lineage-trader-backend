require('dotenv').config();
const express = require('express');
const dbConnection = require('./database/config');
const app = express();
const cors = require('cors');

//parsear body
app.use( express.json() );

//cors
app.use(cors());

//conectar a la base de datos
dbConnection();

//rutas
app.use("/api/auth", require('./routers/auth'));
app.use('/api/item',require('./routers/items'));
app.use('/api/venta',require('./routers/ventas'));

//servidor
app.listen( process.env.PORT, ()=>{
    console.log('server on');
});