import mongoose,{mongo, Schema} from "mongoose"
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"

const videoSchema = new mongoose.Schema(
    {

        videoFile:{  //cloudnary url
            type:String,
            required:true,

        },
        thumbnail:{     //cloudnary url
            type:String,
            required:true,


        },
        title:{    
            type:String,
            required:true,
        },
        Discription:{
            type:String,
            required:true,
        },
        duration:{  //cloudnary url
            type:Number,
            required:true,
        },
       views:{
        type : Number,
        default:0,
       },
       isPublished:{
        type:Boolean,
        default:false,
       },
       owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",

       },



},{timestamps:true})

videoSchema.plugin(mongooseAggregatePaginate)

export const  Video =mongoose.model("Video",videoSchema)