import mongoose from 'mongoose'

const userSchema= new mongoose.Schema({
    username:{
        type:String,
        min:3,
        max:30,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    otp:{
        type:Number,
    },
})

const User = mongoose.model('User',userSchema)
export default User