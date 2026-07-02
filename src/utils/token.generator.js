import jwt from 'jsonwebtoken';;
import dotenv from 'dotenv';
dotenv.config();


export const generateToken = (userData) => {
    const payload = {
        id: userData.id,
        email: userData.email,
        name: userData.name,
        admin: userData.admin
    };
return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
}
    
