import asyncHandler from "../../middlewere/asyncHandler.js";
import User from "../../../database/models/user.model.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { customAlphabet, nanoid } from "nanoid";
import sendEmail from "../../utils/SendEmail.js";


export const SignUp = asyncHandler(async(req,res,next)=>{
    const { email,password}= req.body
    const user= await User.findOne({email})
    if(user){
        return res.json({message:"email aready existed"})
    }
    req.body.password = bcrypt.hashSync(password,8)
    const code = customAlphabet('0123456789',4)
    req.body.otp=code()
    const newuser = await User.insertMany(req.body)
    sendEmail({to:email,html:`<h1>${req.body.otp}</h1>`})
    return res.json({message:"done",newuser})
})



export const logIn = asyncHandler(async(req,res)=>{
    const {email,password}= req.body
const user= await User.findOne({email})
console.log(user);
if(!user){
    return res.json({message:"invalid email or passwrod"})
}
const match = bcrypt.compareSync(password,user.password)
console.log(match);
if(!match){
return res.json({message:"invalid email or passwrod"})
}
const token = jwt.sign({email,_id:user._id,roles:user.roles},'ecomm')
return res.json({message:"done",token })
})