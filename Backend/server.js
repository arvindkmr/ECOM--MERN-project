import app from './app.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config({ path: 'backend/config/config.env' });

//database
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
//     useCreateIndex: true,
  })
  .then((data) => {
	console.log(`connected to ${data.connection.host}`)
    //connect server
    app.listen(process.env.PORT);
  })
  .catch((err) => {
    console.log(err); 
  });
