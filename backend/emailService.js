const nodemailer=require("nodemailer")

const transporter=nodemailer.createTransport({
    service:"Gmail",
    auth:{
        user:"venkatalakshmi00c2@gmail.com",
        pass:"jbxx qvvy pzgy iev"
    }
})
module.exports=transporter