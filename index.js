require('dotenv').config();
const express = require('express');
const dbConnection = require('./database/config');
const app = express();
const cors = require('cors');

//parsear body
app.use( express.json() );

app.use(cors());

//conectar a la base de datos
dbConnection();

//rutas
app.use('/',require('./routers/weapon'));

//servidor
app.listen( process.env.PORT, ()=>{
    console.log('server on');
});