import { Router } from "express";
import { addMassge, deletMassage, getMassges } from "./massage.cotroller.js";
import { auth } from "../../middlewere/auth.js";
import validation from "../../middlewere/Validation.js";
import { addmassageSchema } from "./massageValidation.js";
const route =Router()

route.post('/',auth,validation(addmassageSchema),addMassge).
get('/',auth,validation(addmassageSchema),getMassges).
delete('/:_id',auth,deletMassage)

 export default route
