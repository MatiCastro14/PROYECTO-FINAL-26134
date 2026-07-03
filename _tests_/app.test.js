import request from "supertest";   
import app from "../app.js";    



describe('POST /api/auth/login', () => {
    test('Espero que responda un status 401 si las credenciales son incorrectas', async () => {
        const user = {
            email: 'mal@email.com',
            password: '123456'
        };
        const response = await request(app).post('/api/auth/login').send(user);
        
        expect(response.status).toBe(401);
    });
});


describe("POST /api/auth/login", () => {
    
    test("Espero que responda un 200 y un token si las credenciales son correctas", async () => {
        const user = {
            email: "user@email.com",    
            password: "admin"
        };
        const response = await request(app).post("/api/auth/login").send(user);
        expect(response.status).toBe(200);
        expect(response.body.token).toBeDefined();
    });
});