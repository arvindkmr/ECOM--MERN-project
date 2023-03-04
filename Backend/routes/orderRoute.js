import express from 'express';
import {
  newOrder,
  getSingleOrder,
  myOrders,
  getAllOrders,
  updateOrder,
  deleteOrder,
} from '../controllers/orderController.js';

import { authorizeRoles, isAuthenticatedUser } from '../MiddleWare/auth.js';

const orderRoute = express.Router();

orderRoute.get('/order/:id', isAuthenticatedUser, getSingleOrder);

orderRoute.post('/order/new', isAuthenticatedUser, newOrder);
orderRoute.get('/orders/me', isAuthenticatedUser, myOrders);
orderRoute.get(
  '/admin/orders',
  isAuthenticatedUser,
  authorizeRoles('admin'),
  getAllOrders
);

orderRoute.put(
  '/admin/order/:id',
  isAuthenticatedUser,
  authorizeRoles('admin'),
  updateOrder
);
orderRoute.delete(
  '/admin/order/:id',
  isAuthenticatedUser,
  authorizeRoles('admin'),
  deleteOrder
);

export default orderRoute;
