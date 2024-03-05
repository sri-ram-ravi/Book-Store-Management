const express=require("express")
const dotenv=require("dotenv")
const mongoose=require("mongoose")
dotenv.config({path:"./config.env"})
const bookRouters=require("./Routes/Books")
const app=express()
app.use(express.json())
const PORT=process.env.PORT || 3000
const BOOK_STORE_LOCAL_DB_URL=process.env.BOOK_STORE_LOCAL_DB_URL

mongoose.connect(BOOK_STORE_LOCAL_DB_URL)
    .then(()=>{
        console.log("App Connected to MongooDB")
        app.listen(PORT,()=>console.log(`server listing to ${PORT}`))
    })
    .catch((error)=>{
        console.log(error)
    })
app.use(bookRouters)