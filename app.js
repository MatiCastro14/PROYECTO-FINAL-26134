import dotenv from "dotenv";
dotenv.config();

// Importaciones
import express from "express";
import cors from "cors";
import usersRouter from "./src/routes/users.router.js";
import motosRouter from "./src/routes/motos.router.js";
import authRouter from "./src/routes/auth.router.js";


const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({
    message: "Bienvenidos a la API RESTfull",
  });
});

//Rutas
app.use("/api/motos", motosRouter);
//Autorizacion
app.use("/api/auth", authRouter);
app.use("/api/users", usersRouter);

//Servicio de estado del servidor
app.get("/up", (req, res) => {
  res.json({
    status: "ok",
    message: "Servidor activo",
  });
});

app.use((req, res) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});


export default app;