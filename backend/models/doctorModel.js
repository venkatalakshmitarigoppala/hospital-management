const mongoose =require("mongoose")
const doctorSchema=new mongoose.Schema({
    name:String,
    email:String,
    designation:String,
    mobile:String,
    specialization:String
})
const Doctor=mongoose.model("Doctor",doctorSchema)

module.exports=Doctor