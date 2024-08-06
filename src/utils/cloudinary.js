import {v2 , cloudinary} from "cloudinary"

import fs from "fs"
import { resourceLimits } from "worker_threads";

cloudinary.config({ 
    cloud_name: process.env.CLOUDUNARY_CLOUD_NAME, 
    api_key: process.env.CLOUDUNARY_API_KEY, 
    api_secret: process.env.CLOUDUNARY_API_SECRET , // Click 'View Credentials' below to copy your API secret
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
    }
    catch(error){
        fs.unlinkSync(localFilePath)  //localy remove the file 
        return null
    }
  
}
export {cloudinary}