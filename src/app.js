// import express from  "express"
// import cors from "cors"
// import cookieParser from "cookie-parser"
// import router from './routes/user.router.js';    // import router
//  const app = express()

 
//   // router ddeclaration 

//   app.use("/api/v1/user/register",router)


//   app.use(cors({
//     origin :Progress.env.CORS_ORIGIN,
//     credentials:true,

//   }))

//   app.use(express.json({limit:"15kb"}))
//   app.use(express.urlencoded({extended:true,limit:"16kb"}))
//   app.use(express.static("public"))


//   app.use(cookieParser())
//   app.use(express.json());
  
// export {app};


import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import router from './routes/user.router.js';    // Import router

const app = express();

// Middleware
app.use(cors({
    origin: process.env.CORS_ORIGIN,  // Fixed typo
    credentials: true,
}));

app.use(express.json({ limit: "15kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// Router declaration
app.use("/api/v1/user", router);  // Fixed router path

export { app };
