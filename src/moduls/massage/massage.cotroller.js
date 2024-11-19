import Massage from "../../../database/models/massage.model.js"
import asyncHandler from "../../middlewere/asyncHandler.js"

export const addMassge= asyncHandler (async(req,res)=>{
    req.body.recieverId=req.user._id
    const newMassge= await Massage.insertMany(req.body)
    return res.json({message:"done",newMassge })

})


export const getMassges=asyncHandler(async(req,res)=>{

    const Allmassages = await Massage.find({recieverId:req.user._id})
    return res.json({message:"done",Allmassages})
})


export const deletMassage= asyncHandler(async(req,res)=>{

    const massage = await Massage.findByIdAndDelete(req.params._id,{recieverId:req.user._id},{new:true})
    return res.json({message:"done",massage})
})


