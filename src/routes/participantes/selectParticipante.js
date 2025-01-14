import Participante from "../../models/participante.js";
import Historico from "../../models/historico.js";

// Ruta para cambiar el estado de un participante a "seleccionado"
// (PATCH) /api/roulette
const selectParticipante = async (req, res) => {
  try {
    const { id } = req.body;

    if (!id) {
      return res.status(400).json({ error: "ID es requerido" });
    }

    const participanteSeleccionado = await Participante.findByIdAndUpdate(
      id,
      { seleccionado: true, fecha: new Date() },
      { new: true }
    );

    if (!participanteSeleccionado) {
      return res.status(404).json({ error: "Participante no encontrado" });
    }

    const nuevoRegistro = new Historico({
      nombre: participanteSeleccionado.nombre,
      fecha: new Date(),
      departamento: participanteSeleccionado.departamento,
    });

    await nuevoRegistro.save();

    res.json({
      message:
        "Participante seleccionado correctamente, guardando en historico",
      participante: participanteSeleccionado,
      historico: nuevoRegistro,
    });
  } catch (error) {
    console.error("Error al seleccionar participante", error);
    res.status(500).json({ error: "Error al seleccionar participante" });
  }
};

export default selectParticipante;
