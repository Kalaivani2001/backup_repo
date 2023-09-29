const express = require('express');
// const mongoose = require("mongoose");
const nodemailer= require("nodemailer")
const app = express();
const port = 3001;

let mailTransporter = nodemailer.createTransport({
  service:"gmail",
  auth:{
    user:"kalaivani.ganesan@twilightsoftwares.com",
    pass:"June@2023"
  }
})
let details={
  from:"kalaivani.ganesan@twilightsoftwares.com",
  to:"anbuselvi@twilightsoftwares.com",
  subject:"Test mail",
  text:"Hi, This is testing mail.",
  html: "<b>Hello world?</b>"
}
mailTransporter.sendMail(details,(err)=>{
  if(err){
    console.log("error");
  }
  else{
    console.log("sended");
  }
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });