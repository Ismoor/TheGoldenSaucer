// inicio del servidor 

const express = require('express'); 
const app = express(); 
const cors = require('cors'); // Importa cors

require('./database');

app.use(express.json()); //Ser capaz de convertie los datos que recibe del servidor a datos javascript que van a apoderse manipular
app.use(cors())
app.use(require('./routes/index'))

app.listen(3030);

console.log('Server on port', 3030);