import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import rouletteRoutes from "./routes/roulette.js";
import cors from "cors";

dotenv.config();

const PORT = 3000;

// Conexión a la base de datos
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("Conectado a mongo"))
.catch((error) => console.error("Error al conectar a mongo", error));

// Iniciar express
const app = express();
app.use(express.json());
app.use(cors());

// Rutas
app.use("/api/roulette", rouletteRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
