import "dotenv/config";
import express from "express";
import productsRouter from "./src/routes/products.router.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Bienvenidos a la API RESTfull" });
});

app.use("/api/products", productsRouter);

import authRouter from "./src/routes/auth.router.js";
app.use("/api/auth", authRouter);

export default app;