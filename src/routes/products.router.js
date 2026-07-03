import {Router} from 'express'
import {getallProducts} from '../controllers/products.controller.js'


const router = Router()

//Prefijo de la ruta: /api/products
router.get("/",getallProducts);


export default router;

