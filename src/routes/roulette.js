import { Router } from 'express';
import getParticipantes from './participantes/getParticipantes.js';
import postParticipante from './participantes/postParticipante.js';
import patchParticipante from './participantes/patchParticipante.js';
import deleteParticipante from './participantes/deleteParticipante.js';

const router = Router();

// Rutas
router.get("/", getParticipantes);
router.post("/", postParticipante);
router.delete("/", deleteParticipante);
router.patch("/", patchParticipante);

export default router;
