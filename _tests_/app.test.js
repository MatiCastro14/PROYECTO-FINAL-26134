import request from "supertest";
import app from "../app.js";

describe("POST /api/auth/login", () => {
  test("devuelve 401 con credenciales incorrectas", async () => {
    const response = await request(app).post("/api/auth/login").send({
      email: "mal@email.com",
      password: "123456",
    });

    expect(response.status).toBe(401);
  });

  test("devuelve 200 y un token con credenciales correctas", async () => {
    const response = await request(app).post("/api/auth/login").send({
      email: "admin@example.com",
      password: "admin",
    });

    expect(response.status).toBe(200);
    expect(response.body.token).toBeDefined();
  });
});