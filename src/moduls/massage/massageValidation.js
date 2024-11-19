import joi from 'joi'
export const addmassageSchema=joi.object({
    content:joi.string().min(3).max(70).required(),
}).required()