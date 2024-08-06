import mongoose,{MongooseError, Schema} from "mongoose"
import  jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const userSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:true,
        unique:true,
        lowecase:true,


    },
    email:{
        type:String,
        unique:true,
        lowecase:true,
        required:true,
    },
    fullName:{
        type:String,
        required:true,
        trim:true,
    },

    avatar:{         //cloudnary url
        type:String,
        required:true,
    },
    coverImage:{           //cloudnary url
        type:String,
    },

    watchHistory:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"video",
    }
],

password:{
    type:String,
    required:[true,'Password is required'],
},
refreshToken:{
    type:String,
},


},
{
    timestamps:true
}
)
userSchema.pre("save",async function(next)  {
    if(!this.isModified("password")) return next()
    this.password =bcrypt.hash(this.password,10)

})

userSchema.methods.isPasswordCorrect =async function(password) {
   return await bcrypt.compare(password,this.password)
}

userSchema.methods.generateAccessToken =function(){
   return  jwt.sign({
        _id :this._id,
        email:this.email,
        userName:this.userName,
        fullName:this.fullName,
    },
    process.env.ACCESS_TOKEN_SECRE ,
    {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY
    }
)
}
userSchema.methods.generate.RefreshToken = function(){
    return  jwt.sign({
         _id :this._id,
         
     },
     process.env.REFRESH_TOKEN_SECRET ,
     {
         expiresIn: process.env.REFRESH_TOKEN_EXPIRY
     }
 )
 }
export const User = mongoose.model("User",userSchema)