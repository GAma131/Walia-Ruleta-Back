import { Router } from 'express';
import getParticipantes from './participantes/getParticipantes.js';
import postParticipante from './participantes/postParticipante.js';
import selectParticipante from './participantes/selectParticipante.js';
import deleteParticipante from './participantes/deleteParticipante.js';
import restartParticipantes from './participantes/restartRoulette.js';
import updateParticipante from './participantes/updateParticipante.js';

const router = Router();

// (GET) /api/roulette
router.get("/", getParticipantes);

// (POST) /api/roulette
router.post("/", postParticipante);

// (DELETE) /api/roulette
router.delete("/", deleteParticipante);

// (PATCH) /api/roulette
router.patch("/", selectParticipante);

// (GET) /api/roulette/restart
router.post("/restart", restartParticipantes);

// (PATCH) /api/roulette/update
router.patch("/update", updateParticipante);

export default router;
