//1
/*const http = require('http')
const express=require('express')

const app=express()
app.use((req,res,next)=>{
    console.log("i am in muddfbasdhf");
    next()
    
})
app.use((req,res,next)=>{
    console.log("fkjsgfjkgfgs")
    res.send('<h1>fudhfhsdfohsodghosdhgofhsdoghfoghoshgohfodh</h1>')
})
app.listen(3000)*/



//2 ==>

const express=require('express')
const app=express()
const bodyParser=require('body-parser')
app.use(bodyParser.urlencoded({extended:false}))
app.use('/app-product',(req,res,next)=>{
res.send('<form action="/product" method="POST"><input type="text" name="title"></input> <h1> select the size</h1><input type="number" name="size"><button type="submit">add</button></form>')
})
app.use('/product',(req,res,next)=>{
console.log(req.body.title)
console.log(req.body.size)
res.redirect('/')

})
app.use('/',(req,res,next)=>{

res.send('<h1>fudhfhsdfohsodghosdhgofhsdoghfoghoshgohfodh</h1>')
})
app.listen(5000)