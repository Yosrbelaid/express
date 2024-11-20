const express=require("express")
const app=express()
const path=require('path')
const time=require('./middlewares/time')


app.get('/home',time,(req,res)=>{
    res.sendFile(path.join(__dirname,'/Home_page.html'))
    console.log(__dirname)
    
})
app.get('/services',time,(req,res)=>{
    res.sendFile(path.join(__dirname,'/Our_Services.html'))
    console.log(__dirname)
})

app.get('/contact',time,(req,res)=>{
    res.sendFile(path.join(__dirname,'/Contact_Us.html'))
    console.log(__dirname)
})


app.listen(3000) ,()=>{
    console.log("server is running")
}



