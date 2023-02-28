import express from 'express';
import {
  createProduct,
  deleteProduct,
  getAllProduct,
  singleProduct,
  updateProduct,
} from '../controllers/productController.js';
import { authorizeRoles, isAuthenticatedUser } from '../MiddleWare/auth.js';

const productRoute = express.Router();

productRoute.get('/products', getAllProduct);
productRoute.post('/product/new',isAuthenticatedUser,authorizeRoles("admin"),createProduct);
productRoute.put('/product/:id', isAuthenticatedUser,authorizeRoles("admin"),updateProduct);
productRoute.delete('/product/:id', isAuthenticatedUser,authorizeRoles("admin"),deleteProduct);
productRoute.get('/product/:id', singleProduct);
export default productRoute;
