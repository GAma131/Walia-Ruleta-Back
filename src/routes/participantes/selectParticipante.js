import Participante from "../../models/participante.js";
import Historico from "../../models/historico.js";

// Ruta para cambiar el estado de un participante a "seleccionado"
// (PATCH) /api/roulette
const selectParticipante = async (req, res) => {
  try {
    const { id, departamento } = req.body;

    if (!id) {
      return res.status(400).json({ error: "ID es requerido" });
    }

    if (!departamento) {
      return res
        .status(400)
        .json({ error: "El campo 'departamento' es requerido" });
    }

    // Buscar al participante por ID
    const participante = await Participante.findById(id);

    if (!participante) {
      return res.status(404).json({ error: "Participante no encontrado" });
    }

    // Actualizar el campo "seleccionado" para el departamento específico
    participante.seleccionado[departamento] = true;

    // Guardar los cambios en la base de datos
    await participante.markModified("seleccionado"); // Asegurar que se detecten los cambios en el mapa
    await participante.save();

    console.log(
      `Participante seleccionado: ${participante.nombre}, departamento: ${departamento}`
    );

    // Crear un nuevo registro en la colección "historico"
    const nuevoRegistro = new Historico({
      nombre: participante.nombre,
      fecha: new Date().toLocaleString("es-MX", {
        timeZone: "America/Mexico_City",
      }),
      departamento,
    });

    await nuevoRegistro.save();

    res.json({
      message:
        "Participante seleccionado correctamente, guardando en historico",
      participante,
      historico: nuevoRegistro,
    });
  } catch (error) {
    console.error("Error al seleccionar participante", error);
    res.status(500).json({ error: "Error al seleccionar participante" });
  }
};

export default selectParticipante;
