const mongoose=require("mongoose")
const productSchema=mongoose.Schema({ 
        Phone_number:Number,  
    })
const ProductModel=mongoose.model("products",productSchema)


module.exports={ProductModel}