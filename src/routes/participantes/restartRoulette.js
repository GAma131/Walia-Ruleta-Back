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

    // Verifica si todos los participantes del departamento están seleccionados
    const totalParticipantes = await Participante.countDocuments({
      departamento: depa,
    });
    const seleccionados = await Participante.countDocuments({
      departamento: depa,
      seleccionado: true,
    });

    if (totalParticipantes > 0 && totalParticipantes === seleccionados) {
      // Reinicia los participantes del departamento
      await Participante.updateMany(
        { departamento: depa },
        { seleccionado: false, fecha: null }
      );

      console.log(`Todos los participantes del departamento '${depa}' han sido reiniciados.`);
      return res.status(200).json({
        success: true,
        message: `Todos los participantes del departamento '${depa}' han sido reiniciados.`,
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
