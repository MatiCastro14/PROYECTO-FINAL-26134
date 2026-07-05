import request from "supertest";
import app from "../app.js";

describe("GET /", () => {
  test("devuelve un mensaje de bienvenida", async () => {
    const response = await request(app).get("/");

    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Bienvenidos a la API RESTfull");
  });
});