import Participante from "../../models/participante.js";

//! deprecated
// Ruta para eliminar a un participante
// (DELETE) /api/roulette
const deleteParticipante = async (req, res) => {
    try {
        const {id} = req.body;

        if(!id) {
            return res.status(400).json({error: "ID es requerido"});
        }

        const participanteEliminado = await Participante.findByIdAndDelete(id);

        if(!participanteEliminado) {
            return res.status(404).json({error: "Participante no encontrado"});
        }
        res.json(participanteEliminado);
    } catch (error) {
        console.error("error al elminar al participante", error);
        res.status(500).json({error: "Error al eliminar al participante"});
    }
}

export default deleteParticipante;