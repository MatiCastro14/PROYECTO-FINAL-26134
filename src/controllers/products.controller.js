import { getProducts } from "../models/Product.js";


export const getallProducts = async (req, res) => {
   const products = await getProducts();
   res.json(products);
};
