    import mongoose from "mongoose";

    const courseSchema = new mongoose.Schema({
        name:{
            type: String,
            required: true
        },
        level:{
            type: String,
            required: true
        },
        description:{
            type: String,
            required: true
        },
        image:{
            type: String,
            required: true
        },
        createdAt:{
            type:Date,
            default: Date.now
        },
        lectures:[{
            type: mongoose.Types.ObjectId,
            ref:"lecturesModel"
        }]
    })

    export default mongoose.model("courseModel" , courseSchema);