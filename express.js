const express=require('express')
const path=require('path')
const app=express()
// middleware
app.use(function(req,res,next){
    console.log("hello ")
    next()
})
// dont forgot to add next

app.get('/signup',function(req,res,next){
    res.sendFile(path.join(__dirname,'signup.html'))
    console.log('middle-')
    next()
})

app.use(function(re,res){
    console.log('end')
})
app.post('/signup',function(req,res){
    res.send('account created')
})
app.get('/about',function(req,res){
    res.sendFile(path.join(__dirname,'sample.html'))
})
app.get('/start',function(req,res){
    res.send(" nice to meet you")
})

