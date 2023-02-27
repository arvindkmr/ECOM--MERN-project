import express from "express"
import { getAllProduct } from "../controllers/productController.js"

const productRoute = express.Router();

productRoute.get("/product", getAllProduct)
export default productRoute;