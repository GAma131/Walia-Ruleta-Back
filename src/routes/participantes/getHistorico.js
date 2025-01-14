import Historico from "../../models/historico.js";

// Ruta para obtener todos los registros
// (GET) /api/roulette
const getHistorico = async (req, res) => {
  try {
    const historico = await Historico.find({});
    res.json(historico);
  } catch (error) {
    console.error("Error al obtener participantes", error);
    res.status(500).json({ error: "Error al obtener participantes" });
  }
};

export default getHistorico;