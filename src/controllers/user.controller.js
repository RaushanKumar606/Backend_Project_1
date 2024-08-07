// import { asyncHandler } from "../utils/asyncHandler.js"
 
// const registerUser =  asyncHandler(async(req,res)=>{
//     res.status(200).json({
//         message:"ok"
//     })
// }) 

// export {registerUser}

//new 

import { asyncHandler } from '../utils/asyncHandler.js';

const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: 'User registered successfully'
  });
});

export { registerUser, };