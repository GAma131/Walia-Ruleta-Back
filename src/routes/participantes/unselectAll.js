import Participante from "../../models/participante.js";

// (PATCH) /api/roulette/all
const resetSeleccionados = async (req, res) => {
  try {
    // Realizar una actualización masiva
    await Participante.updateMany(
      {},
      {
        $set: {
          "seleccionado.web": false,
          "seleccionado.app": false,
          "seleccionado.all": false,
        },
      }
    );

    res.json({
      message:
        "Todos los valores 'true' en 'seleccionado' se han cambiado a 'false'.",
    });
  } catch (error) {
    console.error("Error al actualizar los valores de 'seleccionado'", error);
    res
      .status(500)
      .json({ error: "Error al actualizar los valores de 'seleccionado'" });
  }
};

export default resetSeleccionados;
