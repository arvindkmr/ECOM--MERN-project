import express from 'express';
import { registerUser,loginUser,logout } from '../controllers/userController.js';

// const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth');

const userRoute = express.Router();

userRoute.post('/register', registerUser);

userRoute.post('/login',loginUser);
userRoute.get("/logout",logout)

// userRoute.post('/password/forgot',forgotPassword);

// userRoute.route('/password/reset/:token').put(resetPassword);


// router.route('/me').get(isAuthenticatedUser, getUserDetails);

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
