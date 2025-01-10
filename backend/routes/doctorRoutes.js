const express =require("express")
const router=express.Router()
const Doctor =require("../models/doctorModel")

router.get("/",async (req,res)=>{
    const doctorsInfo=await Doctor.find()
    //console.log(doctorsInfo)
    return res.status(200).json(doctorsInfo)
})

module.exports=router