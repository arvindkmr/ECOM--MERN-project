import express from 'express';
import {
  registerUser,
  loginUser,
  logout,
  getUserDetails,
} from '../controllers/userController.js';

import { isAuthenticatedUser, authorizeRoles } from '../middleware/auth';

const userRoute = express.Router();

userRoute.post('/register', registerUser);

userRoute.post('/login', loginUser);
userRoute.get('/logout', logout);

userRoute.get('/me', isAuthenticatedUser, getUserDetails);

// router.route('/password/update').put(isAuthenticatedUser, updatePassword);

// router.route('/me/update').put(isAuthenticatedUser, updateProfile);

// router
//   .route('/admin/users')
//   .get(isAuthenticatedUser, authorizeRoles('admin'), getAllUser);

// router
//   .route('/admin/user/:id')
//   .get(isAuthenticatedUser, authorizeRoles('admin'), getSingleUser)
//   .put(isAuthenticatedUser, authorizeRoles('admin'), updateUserRole)
//   .delete(isAuthenticatedUser, authorizeRoles('admin'), deleteUser);

export default userRoute;
