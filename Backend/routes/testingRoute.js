import express from 'express';
import {
  createOrder
} from '../controllers/testingController.js';
import { authorizeRoles, isAuthenticatedUser } from '../MiddleWare/auth.js';

const orderRoute = express.Router(); 

orderRoute.post('/order/new',isAuthenticatedUser,createOrder);

export default orderRoute;
