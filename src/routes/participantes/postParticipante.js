import Participante from "../../models/participante.js";

// Ruta para crear un nuevo participante
const postParticipante = async (req, res) => {
  try {
    const { nombre } = req.body;

    if (!nombre) {
      return res.status(400).json({ error: "Nombre es requerido" });
    }

    const nuevoParticipante = new Participante({
      nombre: nombre,
      fecha: "",
      estado: "disponible",
    });

    const participanteGuardado = await nuevoParticipante.save();

    res.json(participanteGuardado);
  } catch (error) {
    console.error("Error al guardar participante", error);
    res.status(500).json({ error: "Error al guardar participante" });
  }
};

export default postParticipante;
