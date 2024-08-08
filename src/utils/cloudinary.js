//cloudinary
import cloudinary from 'cloudinary';

import fs from "fs"
import { resourceLimits } from "worker_threads";

const { v2 } = cloudinary;
v2.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uplodeCloudinary = async (localFilePath) =>{
    try{
        if(!localFilePath)  //uplode the file cloudinary 
        return null
     const response=await cloudinary.uploader.upload(localFilePath,{
        resource_type:"auto"
     })
     //file upload

     console.log("file upload cloudinary",response.url);
     return response;
     fs.unlinkSync(localFilePath);
    }
    
    catch(error){
        fs.unlinkSync(localFilePath)  //localy remove the file 
        return null
    }
  
}
export default v2;