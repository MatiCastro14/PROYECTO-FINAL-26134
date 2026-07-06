import express from "express";
import request from "supertest";
import app from "../app.js";
import { authentication } from "../src/middlewares/auth.middleware.js";
import { generateToken } from "../src/utils/token.generator.js";

describe("POST /api/auth/login", () => {
  test("devuelve 400 si faltan credenciales", async () => {
    const response = await request(app).post("/api/auth/login").send({
      email: "admin@example.com",
    });

    expect(response.status).toBe(400);
  });

  test("devuelve 400 si no llega body", async () => {
    const response = await request(app).post("/api/auth/login");

    expect(response.status).toBe(400);
    expect(response.body.message).toBe("Faltan credenciales");
  });

  test("devuelve 200 con credenciales válidas", async () => {
    const response = await request(app).post("/api/auth/login").send({
      email: "admin@example.com",
      password: "admin",
    });

    expect(response.status).toBe(200);
    expect(response.body.token).toBeDefined();
  });

  test("acepta un token Bearer válido", async () => {
    const protectedApp = express();
    protectedApp.get("/protected", authentication, (req, res) => {
      res.status(200).json({ ok: true, user: req.user });
    });

    const token = generateToken({
      id: 1,
      email: "admin@example.com",
      name: "user",
      admin: true,
    });

    const response = await request(protectedApp)
      .get("/protected")
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(response.body.ok).toBe(true);
  });
});
