import {
  createMoto as createMotoModel,
  getMotos as getMotosModel,
  getMotoById as getMotoByIdModel,
  updateMoto as updateMotoModel,
  deleteMoto as deleteMotoModel,
} from "../models/Moto.js";

export const getAllMotos = async (req, res) => {
  const motos = await getMotosModel();
  res.json(motos);
};

export const getMotoById = async (req, res) => {
  const { id } = req.params;

  const moto = await getMotoByIdModel(id);

  if (!moto) {
    return res.status(404).json({
      message: "Moto no encontrada",
    });
  }

  res.json(moto);
};

export const createMoto = async (req, res) => {
  const { modelo, marca, precio, descripcion } = req.body;

  if (!modelo || !marca || !precio || !descripcion) {
    return res.status(422).json({
      message: "Faltan datos obligatorios",
    });
  }

  const newMoto = await createMotoModel({
    modelo,
    marca,
    precio,
    descripcion,
  });

  res.status(201).json(newMoto);
};

export const updateMoto = async (req, res) => {
  const { id } = req.params;
  const { modelo, marca, precio, descripcion } = req.body;

  if (!modelo || !marca || !precio || !descripcion) {
    return res.status(422).json({
      message: "Faltan datos obligatorios",
    });
  }

  const updatedMoto = await updateMotoModel(id, {
    modelo,
    marca,
    precio,
    descripcion,
  });

  if (!updatedMoto) {
    return res.status(404).json({ message: "Moto no encontrada" });
  }

  res.json(updatedMoto);
};

export const deleteMoto = async (req, res) => {
  const { id } = req.params;

  const deletedMoto = await deleteMotoModel(id);

  if (!deletedMoto) {
    return res.status(404).json({ message: "Moto no encontrada" });
  }

  res.json({
    message: "Moto eliminada",
    moto: deletedMoto,
  });
};