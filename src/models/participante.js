import mongoose from "mongoose";

// Modelo que permite cualquier estructura de datos
const participanteSchema = new mongoose.Schema({}, { strict: false });

const Participante = mongoose.model(
  "Participante",
  participanteSchema,
  "participantes"
);

export default Participante;
