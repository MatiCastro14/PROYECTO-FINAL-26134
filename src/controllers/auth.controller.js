import { generateToken } from "../utils/token.generator.js";



const default_user = {
    id: 1,

    name: "user",
    password: 'admin',
    email: 'admin@example.com', 
    admin: true
}

export const login = (req, res) => {
    return res.status(400).json({
        message:"faltan credenciales"
    })
    };

    if (email !== default_user.email || password !== default_user.password) {
        return res.status(401).json({
            message: "credenciales invalidas"
        })
    }

const token = generateToken(default_user);


res.json({
    message: "login exitoso",
    token,  
    })








export const login = (req, res) => {
    const { email, password } = req.body;
    
    res.json({
        message: "login exitoso",
        token: generateToken(default_user)
    });
}