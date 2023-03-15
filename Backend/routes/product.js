import express from 'express';
import {
  createProduct,
  deleteProduct,
  getAllProduct,
  singleProduct,
  updateProduct,
  getAdminProducts,
  createProductReview,
  getProductReviews,
  deleteReview,
} from '../controllers/productController.js';
import { authorizeRoles, isAuthenticatedUser } from '../MiddleWare/auth.js';

const productRoute = express.Router();

productRoute.get('/products', getAllProduct);
productRoute.post('/product/new', isAuthenticatedUser, createProduct);
productRoute.put('/product/:id', isAuthenticatedUser, updateProduct);
productRoute.delete(
  '/product/:id',
  isAuthenticatedUser,
  authorizeRoles('admin'),
  deleteProduct
);
productRoute.get('/product/:id', singleProduct);
productRoute.get(
  '/admin/products',
  isAuthenticatedUser,
  authorizeRoles('admin'),
  getAdminProducts
);

productRoute.post('/review', isAuthenticatedUser, createProductReview);

productRoute.get('/reviews', getProductReviews);
productRoute.delete('/reviews', isAuthenticatedUser, deleteReview);

export default productRoute;
