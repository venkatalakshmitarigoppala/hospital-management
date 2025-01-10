const express = require("express")
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")
const port = 4000
const patientRoutes = require("./routes/patientRoutes")
const doctorRoutes = require("./routes/doctorRoutes")
const appointmentRoutes=require("./routes/appointmentRoutes")

mongoose.connect("mongodb+srv://sivaram:sivaram@cluster0.0u7y0h0.mongodb.net/hospital?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        console.log("Mongodb connected")
    })
    .catch((error) => {
        console.log(error)
    })

app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())
app.use(cors())
app.use("/api/patients", patientRoutes)

app.use("/api/doctors", doctorRoutes)
app.use("/api/appointments",appointmentRoutes)

app.get("/", (req, res) => {
    return res.json({ "message": "server is running successfully" })
})
app.listen(port, () => console.log("Server is running on port: ", port))