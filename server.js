const express  =require("express")
const {connectMongoose} =require("./database.js")
const app =express()

connectMongoose();
app.get("/",(req,res)=>{
    res.send("Hello, Karthik today we are learning passport.js")
})

app.post("/register",(req,res)=>{

})

app.listen(3000,()=>{
    console.log("Server is Running on Port:3000");
})