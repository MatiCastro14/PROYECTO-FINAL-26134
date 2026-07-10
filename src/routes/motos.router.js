import { Router } from "express";


const router = Router();

import {
  getAllMotos,
  getMotoById,
  createMoto,
  updateMoto,
  deleteMoto,
} from "../controllers/motos.controller.js";

import { authentication } from "../middlewares/auth.middleware.js";

// Prefijo: /api/motos

router.post("/", authentication, createMoto);

router.get("/", getAllMotos);
router.get("/:id", getMotoById);


router.put("/:id", authentication, updateMoto);

router.delete("/:id", authentication, deleteMoto);



export default router;

