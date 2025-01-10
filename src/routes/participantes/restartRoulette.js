import Participante from "../../models/participante.js";

// Ruta para reiniciar la ruleta (verificar si todos los participantes han sido seleccionados)
// (GET) /api/roulette/restart
const restartRoulette = async (req, res) => {
    try{
        const participantes = await Participante.find();
        const seleccionados = participantes.every((participante) => participante.seleccionado === true);

        if (seleccionados) {
            await Participante.updateMany({}, {seleccionado: false, fecha: null});

            console.log("Todos los participantes han sido seleccionados");
            res.status(200).json(true);
        }else{
            console.log("NO todos los participantes han sido seleccionados");
            res.status(200).json(false);
        }
    }catch(error){
        console.error("Error al verificar participantes seleccionados: ", error);
        res.status(500).json({error: "Error al verificar participantes seleccionados"});
    }
};

export default restartRoulette;