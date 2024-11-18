import mongoose from "mongoose";
 
const InstructorSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        default:"user"
    },
    lectures:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"lectureModel"
    }]
},  {timestamps:true});

export default mongoose.model('instructorModel', InstructorSchema);