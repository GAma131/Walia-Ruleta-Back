const express = require('express');
const router = express.Router();

// Ruta para obtener los nombres
router.get('/', async (req, res) => {
  try {
    const participants = ["Nombre1", "Nombre2", "Nombre3"]; // Esto luego será dinámico
    res.json(participants);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los nombres.' });
  }
});

module.exports = router;
