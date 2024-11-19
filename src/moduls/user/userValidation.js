import joi from 'joi'
export const addUserSchema=joi.object({
    name:joi.string().min(3).max(70).required(),
    email:joi.string().email({minDomainSegments:2,tlds:{allow:['com','net']}}),
    password:joi.string().pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$'
)),
}).required()