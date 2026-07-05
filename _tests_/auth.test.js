import request from "supertest";
import app from "../app.js";

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
});
