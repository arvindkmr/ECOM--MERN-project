import express from 'express';
import {
  createProduct,
  deleteProduct,
  getAllProduct,
  singleProduct,
  updateProduct,
} from '../controllers/productController.js';

const productRoute = express.Router();

productRoute.get('/products', getAllProduct);
productRoute.post('/product/new', createProduct);
productRoute.put('/product/:id', updateProduct);
productRoute.delete('/product/:id', deleteProduct);
productRoute.get('/product/:id', singleProduct);
export default productRoute;
