const {check,body} = require('express-validator')

const email = check('email').isEmail().withMessage('Formato de email invalido')

const name = check('name').isAlpha().withMessage('El nombre solo tiene que contener letras')
 
const lastname =  check('lastname').isAlpha().withMessage('El apellido solo tiene que contener letras')

const password = body('password').custom((value)=>value!='123456').withMessage('La contraseña no puede ser 123456')


module.exports = {email,name,lastname,password}