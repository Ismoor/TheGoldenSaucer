const {Schema, model} = require ('mongoose'); // SE REQUIEREN LOS DOS METODOS SCHEMA Y MODEL

//El schema contiene un objeto definicion de los datos que se estan guardando
const platoSchema = new Schema({
    _id: { type: Number },
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true }
})

// recibe el nombre del modelo y el schema en el cual esta basado
module.exports = model('plato', platoSchema);

