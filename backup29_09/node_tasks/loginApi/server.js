const express =require("express")
const bodyPaser =require("body-parser")

const app =express()

const server = app.listen(3000, () => {
    console.log('listening on port', server.address().port);
  });