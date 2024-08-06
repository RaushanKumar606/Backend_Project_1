// require('dotenv).config({path:"./env"})
import express from  "express"
const app = express()
import dotenv from "dotenv";
import connectDB from "./database/index.js";

dotenv.config({path:'./env'})


connectDB();



 const port=process.env.PORT || 8000
 

 .then(() => {
   console.log('Connected to MongoDB database.');

   // Start the server after successful database connection
   app.listen(port, () => {
     console.log(`Server is running on http://localhost:${port}`);
   });
 })
 .catch((err) => {
   console.error('Mongoose database connection failed!', err);
 });
  

 

