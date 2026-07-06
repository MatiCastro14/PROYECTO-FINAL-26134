import { getallMotos as getMotosModel } from "../models/Moto.js";

export const getAllMotos = async (req, res) => {
  const motos = await getMotosModel();
  res.json(motos);
};
