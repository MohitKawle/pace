const mongoose =  require("mongoose")

const productSchema = new mongoose.Schema({
    Heading : {type:String, required : true},
    Image : {type: String, required : true},
    userId : {type: String, required : true}
})

const ProductsModel = mongoose.model("product", productSchema)

module.exports = {
    ProductsModel
}