import 'dotenv/config';
import dotenv from 'dotenv';
dotenv.config();

import app from './app.js';


app.use("/api/products", productsRouter);


import authRouter from './src/routes/auth.router.js';
app.use("/api/auth", authRouter);

const app = express()

app.use("/api/products", productsRouter);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => 'http://localhost:${PORT}');

