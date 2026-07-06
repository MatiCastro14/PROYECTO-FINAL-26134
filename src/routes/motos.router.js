import { Router } from "express";
import { getAllMotos } from "../controllers/motos.controller.js";

const router = Router();

// Prefijo: /api/motos
router.get("/", getAllMotos);

export default router;

