const mongoose=require("mongoose")

const dogSchema=mongoose.Schema({
    name:String,
    age:Number,
    gender:String,
    city:String
})

const DogModel=mongoose.model("dog",dogSchema)

module.exports={
    DogModel
}