import mongoose from "mongoose";

// Modelo para participantes
const participanteSchema = new mongoose.Schema({
  nombre: {type: String},
  fecha: {type: Date},
  estado: {type: String},
});

const Participante = mongoose.model('Participante', participanteSchema, 'participantes');

export default Participante;