import Participante from "../../models/participante.js";

const restartRoulette = async (req, res) => {
    try{
        const participantes = await Participante.find();
        const seleccionados = participantes.every((participante) => participante.seleccionado === true);

        if (seleccionados) {
            await Participante.updateMany({}, {seleccionado: false, fecha: null});

            console.log("Todos los participantes han sido seleccionados");
            res.json({message: "Todos los participantes seleccionados ahora están disponibles"});
        }else{
            console.log("NO todos los participantes han sido seleccionados");
            res.json({message: "NO todos los participantes han sido seleccionados"});
        }
    }catch(error){
        console.error("Error al verificar participantes seleccionados: ", error);
        res.status(500).json({error: "Error al verificar participantes seleccionados"});
    }
};

export default restartRoulette;