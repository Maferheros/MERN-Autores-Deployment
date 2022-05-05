const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
require( './config/config');
app.use(express.json() );

const AutorRouter = require ( './rutas/autor.routes');
app.use( '/' , AutorRouter);

app.listen(8080, () => {
    console.log("Listening at Port 8080")
});