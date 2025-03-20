const express = require('express')
const app = express()
const path = require('path') 
const bookRouter = require('./route/bookRoute')

app.use('/books',bookRouter)

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/index.html'))
})
app.listen(3000,()=>{
    console.log('server started....')//server creation
})