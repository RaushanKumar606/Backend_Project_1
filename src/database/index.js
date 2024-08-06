import mongoose from "mongoose"

import {DB_NAME} from "../constantent.js"


const connectDB =async()=>
    {

    try{
        const connectionInstant= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

         console.log(`\n Mongoose Connection !! DB HOST ${connectionInstant.connection.host}`)

    }

    catch (error)
    
    {
     console.log("Mongoose Connection is Error",error)
    }
}

export default connectDB