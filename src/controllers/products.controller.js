import { getProducts } from "../models/products.js";


export const getallProducts = async (req, res) => {
   const products = await getProducts();
   res.json(products);
};

W