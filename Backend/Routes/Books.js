const express=require("express")
const bookRouters=express.Router();
const Bookstore=require("../Model/Books")

bookRouters.post("/addbook",async(req,res)=>{
    try{
        if(
            !req.body.title,
            !req.body.author,
            !req.body.publishYear
        ){
            return res.status(400).send({message:"please check with the user input"})
        }else{
           await Bookstore.create({
                title:req.body.title,
                author:req.body.author,
                publishYear:req.body.publishYear
            })
            return res.status(201).send({message:"book details created successfully"})
        }
    }catch(error){
        res.status(500).send({message:error.message})
    }
})

bookRouters.get("/getbooks",async(req,res)=>{
    try{
        const allBookDetails=await Bookstore.find({})
        if (allBookDetails.length === 0) {
            return res.status(200).send({ message: "No book details found." });
        } else {
            return res.status(200).send({ bookdetails: allBookDetails });
        }
    }catch(error){
        res.status(500).send({message:error.message})
    }
})

bookRouters.get("/getbook/:id",async(req,res)=>{
    try{
        const bookid=req.params.id;
        const allBookDetails=await Bookstore.find({_id:bookid})
        return res.status(200).send({bookdetails:allBookDetails})
    }catch(error){
        res.status(500).send({message:error.message})
    }
})

bookRouters.put("/updatebook/:id",async(req,res)=>{
    try{
        if(
            !req.body.title,
            !req.body.author,
            !req.body.publishYear
        ){
                return res.status(400).send({message:"please check with the user input"})
        }else{
                const bookid=req.params.id;
                const allBookDetails=await Bookstore.updateOne({_id:bookid},{$set:{
                title:req.body.title,
                author:req.body.author,
                publishYear:req.body.publishYear
        }})
        return res.status(201).send({message:"book details updated successfully"})
        }
    }catch(error){
        res.status(500).send({message:error.message})
    }
})

bookRouters.delete("/deletebook/:id",async(req,res)=>{
    try{
        const bookid=req.params.id;
        const allBookDetails=await Bookstore.deleteOne({_id:bookid})
        return res.status(200).send({message:"book details deleted successfully"})
    }catch(error){
        res.status(500).send({message:error.message})
    }
})

module.exports=bookRouters;