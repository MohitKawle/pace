const mongoose=require("mongoose")
const userSchema=mongoose.Schema({ 
        Phone_number:Number,  
    })
const UserModel=mongoose.model("users",userSchema)


module.exports={UserModel}