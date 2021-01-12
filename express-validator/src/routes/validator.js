const {check,body} =require('express-validator')

const allValidations = {
    email:check('email').isEmail().withMessage('Formato de email invalido'),
    name:check('name').isAlpha().withMessage('El nombre solo tiene que contener letras'),
    lastname:check('lastname').isAlpha().withMessage('El apellido solo tiene que contener letras'),
    password:body('password').custom((value)=>value!='123456').withMessage('La contraseña no puede ser 123456')
}

 

const validator = (...validations) =>{


    const chosenValidations = validations
     
const resul= chosenValidations.reduce((obj , val)=>{
    
      obj.push(allValidations[val])
    return obj
}, [])

return resul.length ? resul : Object.values(allValidations)
}


module.exports=validator

 
