import Participante from "../../models/participante.js";

// Ruta para cambiar el estado de un participante a "seleccionado"
const selectParticipante = async (req, res) => {
  try {
    const { id } = req.body;

    const participanteSeleccionado = await Participante.findByIdAndUpdate(
      id,
      {
        seleccionado: true,
        fecha: new Date(),
      },
      { new: true }
    );

    if (!participanteSeleccionado) {
      return res.status(404).json({ error: "Participante no encontrado" });
    }
    res.json({message: "Participante seleccionado correctamente", participante: participanteSeleccionado});
  } catch (error) {
    console.error("Error al seleccionar participante", error);
    res.status(500).json({ error: "Error al seleccionar participante" });
  }
};

export default selectParticipante;
