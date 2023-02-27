import express from 'express';
import productRoute from './routes/product.js';
const app = express();

app.use(express.json());

//routes import
app.use('/api/v1', productRoute);
export default app;
