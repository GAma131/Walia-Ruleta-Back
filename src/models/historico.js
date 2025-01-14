import mongoose from "mongoose";

// Modelo para participantes
const historicoSchema = new mongoose.Schema({
  nombre: {type: String},
  fecha: {type: Date},
  departamento: {type: String},
});

const Historico = mongoose.model('historico', historicoSchema, 'historico');

export default Historico;