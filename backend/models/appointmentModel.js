const mongoose=require("mongoose")
const appointmentSchema=new mongoose.Schema({
    patientId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Patient",
        required:true
    },
    doctorId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Doctor",
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    time:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:["Pending","Confirmed","Cancelled"],
        default:"Pending"
    }
})

const Appointment= mongoose.model("appointment",appointmentSchema)
module.exports=Appointment