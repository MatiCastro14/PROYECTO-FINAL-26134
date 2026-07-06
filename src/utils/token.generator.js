import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();


export const generateToken = (userData) => {
  const payload = {
    id: userData.id,
  };

  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });
};