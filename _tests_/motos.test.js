import request from "supertest";
import app from "../app.js";

let token;
let motoId;

beforeAll(async () => {
  const loginResponse = await request(app).post("/api/auth/login").send({
    email: "admin@example.com",
    password: "admin",
  });

  token = loginResponse.body.token;
});

describe("CRUD /api/motos", () => {
  test("GET /api/motos debe devolver un array", async () => {
    const response = await request(app).get("/api/motos");

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  test("POST /api/motos debe crear una moto", async () => {
    const response = await request(app)
      .post("/api/motos")
      .set("Authorization", `Bearer ${token}`)
      .send({
        modelo: "Moto test CRUD",
        marca: "generica",
        precio: 10,
        descripcion: "Moto de prueba para test CRUD",
      });

    expect(response.status).toBe(201);
    expect(response.body.id).toBeDefined();
    expect(response.body.modelo).toBe("Moto test CRUD");
    expect(response.body.marca).toBe("generica");
    expect(response.body.precio).toBe(10);
    expect(response.body.descripcion).toBe("Moto de prueba para test CRUD");

    motoId = response.body.id;
  });

  test("GET /api/motos/:id debe devolver la moto creada", async () => {
    const response = await request(app).get(`/api/motos/${motoId}`);

    expect(response.status).toBe(200);
    expect(response.body.id).toBe(motoId);
    expect(response.body.modelo).toBe("Moto test CRUD");
  });

  test("PUT /api/motos/:id debe actualizar la moto", async () => {
    const response = await request(app)
      .put(`/api/motos/${motoId}`)
      .set("Authorization", `Bearer ${token}`)
      .send({
        modelo: "Moto test actualizada",
        marca: "generica",
        precio: 2000,
        descripcion: "Moto de prueba para test CRUD",
      });

    expect(response.status).toBe(200);
    expect(response.body.id).toBe(motoId);
    expect(response.body.modelo).toBe("Moto test actualizada");
    expect(response.body.marca).toBe("generica");
    expect(response.body.precio).toBe(2000);
    expect(response.body.descripcion).toBe("Moto de prueba para test CRUD");
  });

  test("DELETE /api/motos/:id debe eliminar la moto", async () => {
    const response = await request(app)
      .delete(`/api/motos/${motoId}`)
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(200);
  });

  test("GET /api/motos/:id debe responder 404 luego de eliminar", async () => {
    const response = await request(app).get(`/api/motos/${motoId}`);

    expect(response.status).toBe(404);
  });
});