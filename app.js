import dotenv from "dotenv";
dotenv.config();


import express from "express";

import motosRouter from "./src/routes/motos.router.js";
import authRouter from "./src/routes/auth.router.js";
import { authentication as auth } from "./src/middlewares/auth.middleware.js";


const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Bienvenidos a la API RESTfull" });
});


app.use("/api/motos",auth, motosRouter);



//Autorizacion

app.use("/api/auth", authRouter);

export default app;