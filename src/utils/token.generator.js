import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const secretKey = process.env.JWT_SECRET || "secreto-dev";

export const generateToken = (userData) => {
  const payload = {
    id: userData.id,
    email: userData.email,
    name: userData.name,
    admin: userData.admin,
  };

  return jwt.sign(payload, secretKey, { expiresIn: "1h" });
};

