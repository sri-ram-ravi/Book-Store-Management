const mongoose=require("mongoose")

const BookDetailsSchema=new mongoose.Schema({
    title:String,
    author:String,
    publishYear:Number
},{
    timestamps:true
})

module.exports=mongoose.model("Bookstore",BookDetailsSchema,"BookDetails")