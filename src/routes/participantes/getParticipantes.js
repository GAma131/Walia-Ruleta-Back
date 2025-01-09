import Participante from "../../models/participante.js";

// Ruta para obtener todos los participantes
// (GET) /api/roulette
const getParticipantes = async (req, res) => {
  try {
    const participantes = await Participante.find({});
    res.json(participantes);
  } catch (error) {
    console.error("Error al obtener participantes", error);
    res.status(500).json({ error: "Error al obtener participantes" });
  }
};

export default getParticipantes;