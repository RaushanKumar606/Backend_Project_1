import { asyncHandler } from "../utils/asyncHandler.js"
import {User } from "../modles/user.modle.js"
import {upload} from "../middlewares/multer.middel.js"
import v2 from '../utils/cloudinary.js';
import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";

 
const registerUser =  asyncHandler(async(req,res)=>{
    res.status(200).json({
        message:"chai and code "
    })

    const {fullName,userName,password,email} = req.body;
            name:"avatar",
     console.log({email,fullName});
    if ([fullName, userName, email, password].some(field => !field?.trim())) {
      throw new ApiError(400, "All fields are required");
  }

    const exitUser = User.findOne({$or:[{userName},{email}]})

    if(exitUser){
      throw new ApiError(409,"username exit all ready");
    }
  
    const avatarLocalPath = req.files?.avatar?.[0]?.path;
    const coverImageLocalPath = req.files?.coverImage?.[0]?.path;

    if(! avatarLocalPath ){
      throw new ApiError(400,"Image upload is requierd");
    }

    const avatar = await uploadercloudinary(avatarLocalPath)
 const coverImage = await uploadercloudinary(coverImageLocalPath)

      if(!avatar){
        throw new ApiError(400,"not upload image")
      }

       const user = await User.create({
        fullName,
        avatar:avatar.url,
        password,
        userName:userName.tolowercase(),
       });

       const createUser = User.findById(use._id).select("-password -refreshToken");
       if(!createUser){
        throw new ApiError(500,"server error");
       }


return  res.status(201).json(new ApiRespones(200,(createUser,"user register successfull ")))

    
}); 

export {registerUser}

