import Participante from "../../models/participante.js";

// Ruta para actualizar los campos de un participante
// (PUT) /api/roulette
const updateParticipante = async (req, res) => {
    try {
        const { id, nombre, departamentos, seleccionado } = req.body;

        if (!id) {
            return res.status(400).json({ error: "ID es requerido" });
        }

        // Construir el objeto de actualización basado en los campos recibidos
        const actualizaciones = {};
        if (nombre !== undefined) actualizaciones.nombre = nombre;
        if (departamentos !== undefined) actualizaciones.departamentos = departamentos;
        if (seleccionado !== undefined) actualizaciones.seleccionado = seleccionado;

        // Actualizar el documento en la base de datos
        const participanteActualizado = await Participante.findByIdAndUpdate(
            id,
            { $set: actualizaciones },
            { new: true, runValidators: true } // Retorna el documento actualizado y valida los datos
        );

        if (!participanteActualizado) {
            return res.status(404).json({ error: "Participante no encontrado" });
        }

        res.json(participanteActualizado);
    } catch (error) {
        console.error("Error al actualizar el participante", error);
        res.status(500).json({ error: "Error al actualizar el participante" });
    }
};

export default updateParticipante;
