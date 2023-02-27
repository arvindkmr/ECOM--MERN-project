import express from "express"
import { createProduct, getAllProduct } from "../controllers/productController.js"

const productRoute = express.Router();

productRoute.get("/products", getAllProduct)
productRoute.post("/product/new", createProduct)
export default productRoute;