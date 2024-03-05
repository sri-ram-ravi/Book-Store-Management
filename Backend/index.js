const express=require("express")
const dotenv=require("dotenv")
dotenv.config({path:"./Config.js"})
const app=express()
const PORT=process.env.PORT || 3000
app.listen(PORT,()=>console.log(`server listing to ${PORT}`))