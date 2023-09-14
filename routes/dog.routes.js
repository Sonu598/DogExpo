const express = require("express")
const { DogModel } = require("../model/dog.model")

const dogRouter = express.Router()


dogRouter.get("/dogs",async (req, res) => {
    const dog=await DogModel.find()
    res.send(dog)
})

dogRouter.post("/dog/create", async (req, res) => {
    const payload = req.body
    const dog = new DogModel(payload)
    await dog.save()
    res.send({ "msg": "dog created" })
})

dogRouter.patch("/update/:id", async (req, res) => {
    const dogID=req.params.id
    const payload=req.body
    await NoteModel.findByIdAndUpdate({_id:dogID},payload)
 
     res.send({"msg":`dog with id${dogID} has been updated`})
 })

dogRouter.delete("/delete/:id", async (req, res) => {
   const dogID=req.params.id
   await NoteModel.findByIdAndDelete({_id:dogID})

    res.send({"msg":`dog with id${dogID} has been Deleted`})
})

module.exports = {
    dogRouter
}