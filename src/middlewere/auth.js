import jwt from "jsonwebtoken"
import asyncHandler from "./asyncHandler.js"
export const auth =asyncHandler( async(req ,res,next)=>{
    const authorization= req.headers.authorization
const token = authorization.split('mas__')[1]
const payload=jwt.verify(token,'ecomm')
if(!payload){
    return res.json({message:"invalid paylod"})
}
req.user=payload
next()
})
