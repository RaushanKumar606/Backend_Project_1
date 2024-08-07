import express from  "express"
import cors from "cors"
import cookieParser from "cookie-parser"
 const app = express()

  app.use(cors({
    origin :Progress.env.CORS_ORIGIN,
    credentials:true,

  }))

  app.use(express.json({limit:"15kb"}))
  app.use(express.urlencoded({extended:true,limit:"16kb"}))
  app.use(express.static("public"))


  app.use(cookieParser())

  app.use(express.json());
  // import router

  import router from './routes/user.router.js';


  // router ddeclaration 

  app.use("/register",router)
  
export {app};