import dotenv from "dotenv";
dotenv.config();

import jwt from "jsonwebtoken";

const secretKey = process.env.JWT_SECRET;

export const authentication = (req, res, next) => {
  const authHeader = req.headers.authorization || "";

  if (!authHeader) {
    return res.status(401).json({ message: "Token no enviado" });
  }

  const [scheme, token] = authHeader.split(" ");

  if (!token || (scheme.toLowerCase() !== "bearer" && scheme.toLowerCase() !== "token")) {
    return res.status(401).json({ message: "Token no válido" });
  }

  try {
    const decoded = jwt.verify(token, secretKeys);
    req.user = decoded;
    next();
  } catch (error) {
    console.error("Error al verificar token:", error.message,secretKey);
    return res.status(401).json({ message: "Token no válido", error: error.message });
  }
};

