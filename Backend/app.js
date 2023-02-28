import express from 'express';
import productRoute from './routes/product.js';
import errorMiddleware from "./MiddleWare/error.js"
import userRoute from './routes/userRoute.js';
import cookieParser from "cookie-parser" 
const app = express();

app.use(express.json());
app.use(cookieParser());

//routes import
app.use('/api/v1', productRoute);
app.use('/api/v1', userRoute);

//middleware for error
app.use(errorMiddleware)
export default app;
