const express = require('express')
const mainRouter = require('./routes/main')

const app =express()



app.use(express.json())
app.use(express.urlencoded({extended:true}))



app.set('view engine','ejs')
app.set('views','./express-validator/src/views')

app.use(mainRouter)










app.listen(3000,(req,res)=>{console.log('Server ready on port 3000');})

