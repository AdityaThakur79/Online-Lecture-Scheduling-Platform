import mongoose from "mongoose";

const lectureSchema = new mongoose.Schema({
    title:{
        type: String,
        required : true
    },
    description:{
        type:String,
        required:true
    },
    startTime: {
        type: Date,
        required: true,
      },
      endTime: {
        type: Date,
        required: true,
      },
    course:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "courseModel"
    },
    instructor:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "instructorModel"
    }
    
},  {timestamps:true});

export default mongoose.model('lecturesModel' ,lectureSchema ) 