import Participante from "../../models/participante.js";

const updateParticipante = async (req, res) => {
    try{
        const { id, nombre, fecha, seleccionado } = req.body;

        if(!id){
            return res.status(400).json({error: "ID es requerido"});
        }

        const actualizar = await Participante.findByIdAndUpdate(
            id,
            {
                nombre: nombre,
                fecha: fecha,
                seleccionado: seleccionado,
            },
            {new: true, runValidators: true}
        )

        if(!actualizar){
            return res.status(404).json({error: "Participante no encontrado"});
        }

        res.json({message: "Participante actualizado", participante: actualizar});
    }catch(error){
        console.error("Error al actualizar participante", error);
        res.status(500).json({error: "Error al actualizar participante"});
    }
};

export default updateParticipante;