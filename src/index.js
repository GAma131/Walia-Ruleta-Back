import express from "express";
import { json } from "body-parser";
import rouletteRoutes from "./routes/roulette";

const app = express();
const PORT = 3000;

// Middlewares
app.use(json());

// Rutas
app.use("/api/roulette", rouletteRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
