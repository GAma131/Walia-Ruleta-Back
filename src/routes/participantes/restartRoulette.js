import Participante from "../../models/participante.js";

// Ruta para reiniciar la ruleta (verificar si todos los participantes han sido seleccionados)
// (POST) /api/roulette/restart
const restartRoulette = async (req, res) => {
  try {
    const { depa } = req.body;

    if (!depa) {
      return res
        .status(400)
        .json({ error: "El parámetro 'depa' es requerido." });
    }

    // Verificar si todos los participantes del departamento han sido seleccionados
    const totalParticipantes = await Participante.countDocuments({
      departamentos: depa,
    });

    const participantesSeleccionados = await Participante.countDocuments({
      departamentos: depa,
      [`seleccionado.${depa}`]: true, // Busca específicamente el departamento con seleccionado: true
    });

    if (totalParticipantes > 0 && totalParticipantes === participantesSeleccionados) {
      // Reiniciar el estado "seleccionado" para el departamento específico
      const participantesActualizados = await Participante.updateMany(
        { departamentos: depa },
        {
          $set: { [`seleccionado.${depa}`]: false }, // Reinicia solo el departamento indicado
        }
      );

      console.log(
        `Todos los participantes del departamento '${depa}' han sido reiniciados.`
      );
      return res.status(200).json({
        success: true,
        message: `Todos los participantes del departamento '${depa}' han sido reiniciados.`,
        participantesActualizados,
      });
    } else {
      console.log(
        `No todos los participantes del departamento '${depa}' han sido seleccionados.`
      );
      return res.status(200).json({
        success: false,
        message: `No todos los participantes del departamento '${depa}' han sido seleccionados.`,
      });
    }
  } catch (error) {
    console.error("Error al verificar participantes seleccionados: ", error);
    res.status(500).json({
      error: "Error al verificar participantes seleccionados",
    });
  }
};

export default restartRoulette;
