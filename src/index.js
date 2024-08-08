// require('dotenv).config({path:"./env"})


import express from  "express"
import cors from 'cors';
import cookieParser from 'cookie-parser';
import router from './routes/user.router.js';
const app = express()
 import dotenv from "dotenv";
 import connectDB from "./database/index.database.js";
 dotenv.config({path:'./env'})
 connectDB();

// Middleware
app.use(cors());
app.use(cookieParser());
app.use(express.json()); // To parse JSON bodies

                                 
app.use("/api/v1/user", router); // Router declaration


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

  

 


//  .then(() => {
//    console.log('Connected to MongoDB database.');

//    // Start the server after successful database connection
//    app.listen(port, () => {
//      console.log(`Server is running on http://localhost:${port}`);
//    });
//  })
//  .catch((err) => {
//    console.error('Mongoose database connection failed!', err);
//  });

