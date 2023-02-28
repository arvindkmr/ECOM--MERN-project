import express from 'express';
import productRoute from './routes/product.js';
import errorMiddleware from "./MiddleWare/error.js"
const app = express();

app.use(express.json());

//routes import
app.use('/api/v1', productRoute);

//middleware for error
app.use(errorMiddleware)
export default app;
