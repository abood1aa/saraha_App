import { Router } from "express";
import { logIn, SignUp } from "./user.controller.js";
import validation from "../../middlewere/Validation.js";
import { addUserSchema } from "./userValidation.js";
const route =Router()

route.post('/signUp',validation(addUserSchema),SignUp)
.post('/logIn',validation(addUserSchema),logIn)

 export default route
