import express from 'express';
import productRoute from './routes/product.js';
import errorMiddleware from './MiddleWare/error.js';
import userRoute from './routes/userRoute.js';
import paymentRoute from './routes/paymentRoute.js';
import orderRoute from './routes/orderRoute.js';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: true }));
//routes import
app.use('/api/v1', productRoute);
app.use('/api/v1', userRoute);
app.use('/api/v1', paymentRoute);
app.use('/api/v1', orderRoute);

//middleware for error
app.use(errorMiddleware);
export default app;
