import Participante from "../../models/participante.js";

// Ruta para actualizar los valores "true" a "false" en el campo "seleccionado"
// (PATCH) /api/roulette/all
const resetSeleccionados = async (req, res) => {
  try {
    const participantes = await Participante.find();

    for (const participante of participantes) {
      const nuevoSeleccionado = {};

      // Recorrer todas las claves del mapa "seleccionado"
      for (const [clave, valor] of Object.entries(participante.seleccionado)) {
        // Si el valor es true, cambiarlo a false, si no, conservarlo
        nuevoSeleccionado[clave] = valor === true ? false : valor;
      }

      // Actualizar el mapa "seleccionado" en el documento
      participante.seleccionado = nuevoSeleccionado;
      await participante.save();
    }

    res.json({ message: "Todos los valores 'true' en 'seleccionado' se han cambiado a 'false'." });
  } catch (error) {
    console.error("Error al actualizar los valores de 'seleccionado'", error);
    res.status(500).json({ error: "Error al actualizar los valores de 'seleccionado'" });
  }
};

export default resetSeleccionados;
