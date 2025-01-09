import { Router } from 'express';
import getParticipantes from './participantes/getParticipantes.js';
import postParticipante from './participantes/postParticipante.js';
import selectParticipante from './participantes/selectParticipante.js';
import deleteParticipante from './participantes/deleteParticipante.js';
import restartParticipantes from './participantes/restartRoulette.js';
import updateParticipante from './participantes/updateParticipante.js';

const router = Router();

// Rutas
router.get("/", getParticipantes);
router.post("/", postParticipante);
router.delete("/", deleteParticipante);
router.patch("/", selectParticipante);
router.get("/restart", restartParticipantes);
router.patch("/update", updateParticipante);

export default router;
