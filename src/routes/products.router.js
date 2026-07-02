import {Router} from 'express'
import productsRouter from './src/routes/products.router.js'
import {getallProducts} from './src/controllers/products.controller.js'


const router = Router()

//Prefijo de la ruta: /api/products
router.get("/");

export default router;

