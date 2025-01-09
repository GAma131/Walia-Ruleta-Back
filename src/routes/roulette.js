import { Router } from 'express';
import mongoose from 'mongoose';

const router = Router();

// Modelo para participantes
const participanteSchema = new mongoose.Schema({
  nombre: {type: String},
  fecha: {type: Date},
  estado: {type: String},
});

const Participante = mongoose.model('Participante', participanteSchema, 'participantes');

// Ruta para obtener todos los participantes
router.get("/", async (req, res) => {
  try{
    const participantes = await Participante.find({});
    res.json(participantes);
  } catch(error){
    console.error("Error al obtener participantes", error);
    res.status(500).json({error: "Error al obtener participantes"});
  }
});

// Ruta para crear un nuevo participante
router.post("/", async (req, res) => {
  try{
    const {nombre} =req.body;

    const nuevoParticipante = new Participante({
      nombre: nombre,
      fecha: new Date(),
      estado: "disponible",
    });

    const participanteGuardado = await nuevoParticipante.save();

    res.json(participanteGuardado);
  } catch(error){
    console.error("Error al guardar participante", error);
    res.status(500).json({error: "Error al guardar participante"});
  }
});

export default router;
