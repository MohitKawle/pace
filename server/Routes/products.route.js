const {Router} = require("express");

const productsController =  Router();
const bcrypt = require('bcrypt');

var jwt = require('jsonwebtoken');
const {ProductsModel} = require("../models/productModel")


productsController.get("/",async (req, res)=>{
    
    const notes =  await ProductsModel.find({userId: req.body.userId})
    
    res.send(notes)
})

productsController.post("/create", async(req, res)=>{
    const {Heading,  Image, userId } = req.body;
    const note = new ProductsModel({
        Heading, 
        Image,
        userId
    })
    try{
        await note.save()
        res.send("notes created")
    }
    catch(err){
        console.log(err)
        res.send("something went wrong")
    }    
})

productsController.delete("/delete/:noteId", async(req, res)=>{
    const {noteId} = req.params
    const deletedNote = await ProductsModel.findOneAndDelete({_id: noteId, userId: req.body.userId})
    if(deletedNote){
        res.send("deleted")
    }
    else{
        res.send("couldn't delete")
    }    
})

productsController.patch("/edit/:noteId", async(req, res)=>{
    const {noteId} = req.params
    const deletedNote = await ProductsModel.findOneAndUpdate({_id: noteId, userId: req.body.userId},req.body)
    if(deletedNote){
        res.send("updated")
    }
    else{
        res.send("couldn't update")
    }    
})

    
    

module.exports = {
    productsController
}