//validation
const Joi = require("@hapi/joi")

const registrationValidation = data =>{
    const Schema = {
        name:Joi.string().min(6).required(),
        email:Joi.string().min(6).required(),
        password:Joi.string().min(6).required()
    }

    return Joi.validate(data,Schema)
}

module.exports.registrationValidation = registrationValidation;