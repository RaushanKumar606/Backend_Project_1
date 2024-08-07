import mongoose from "mongoose"

// import {DB_NAME} from "../constantent.js"


// const connectDB =async()=>
//     {

//     try{
//         const connectionInstant= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

//          console.log(`\n Mongoose Connection !! DB HOST ${connectionInstant.connection.host}`)

//     }

//     catch (error)
    
//     {
//      console.log("Mongoose Connection is Error",error)
//     }
// }

// export default connectDB

const connectDB = async () => {
  try {
    const connectionIstant= await mongoose.connect('mongodb+srv://Anshika:Anshika123@anshika.79ftq.mongodb.net/myDatabase?retryWrites=true&w=majority', {
      //useNewUrlParser: true,
      //useUnifiedTopology: true,
    });
    console.log(`\n Mongoose Connection  successfully!! DB HOST ${connectionIstant.connection.host}`);
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
};
export default connectDB
