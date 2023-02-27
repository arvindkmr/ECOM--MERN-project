import app from './app.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config({ path: 'backend/config/config.env' });

//database
mongoose
  .connect('mongodb://0.0.0.0:27017/')
  .then(() => {
    //connect server
    app.listen(process.env.PORT);
  })
  .then(() => {
    console.log(
      `connected to database and listening to port ${process.env.PORT} `
    );
  })
  .catch((err) => {
    console.log(err);
  });
