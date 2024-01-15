import { error } from "console"
import { NextFunction, Request, Response, response } from "express"
import Joi from "joi"

/** Create Validation Schema */
let schema = Joi.object({
    panjang : Joi.number().required().min(1),
    lebar : Joi.number().required().min(1),
    tinggi : Joi.number().required().min(1)
})

/** Create a Validation Function */
let ValidateCube = (
    request: Request, 
    response: Response,
    next: NextFunction) => {
       let { error } = schema.validate(request.body)
       if(error){
            /** Status 400 = BAD REQUEST */
            return response.status(400).json({
                message: error.details
            })
       }
       next()
       
    }

    export { ValidateCube }