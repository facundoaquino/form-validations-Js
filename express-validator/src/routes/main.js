const router = require('express').Router()

const {check , validationResult} = require('express-validator')
const {name:validateName ,email:validateEmail ,lastname:validateLast,password:validatePassword} = require('./validations')

router.get('/',(req,res)=>{


    res.render('form',{errors:false})
})





router.post('/',validateName,validateEmail,validateLast,validatePassword,(req,res)=>{

    // console.log(validationResult(req));
    const errors = validationResult(req).mapped()

    // console.log(errors.array())
    // console.log(errors.mapped())
    // console.log(errors.isEmpty())
    console.log(errors)

    res.render('form',{errors:errors})
})
module.exports = router