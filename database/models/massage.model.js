import mongoose from "mongoose";
 const massageSchema=new mongoose.Schema({
    content: {
        type:String,
        min:3,
        max:300,
        required: true
    },
    recieverId: {
        type:mongoose.Types.ObjectId,
        required : true,
        ref:'User'
    }
},{timestamps:true})

const Massage = mongoose.model('Massage',massageSchema)
export default Massage