import Participante from "../../models/participante.js";

// Ruta para actualizar el campo "seleccionado" a false en todos los elementos
// (PATCH) /api/roulette/all
const resetSeleccionados = async (req, res) => {
  try {
    const resultado = await Participante.updateMany(
      { seleccionado: true }, // Condición para actualizar
      { seleccionado: false } // Valores a actualizar
    );

    res.json({
      message: "Todos los participantes han sido deseleccionados.",
      resultado,
    });
  } catch (error) {
    console.error("Error al deseleccionar participantes", error);
    res.status(500).json({ error: "Error al deseleccionar participantes" });
  }
};

export default resetSeleccionados;
