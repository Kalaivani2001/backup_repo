const express = require('express');
const fileUpload = require("express-fileupload")
const mongoose = require("mongoose");
const path = require("path")
const multer =  require("multer")
const jwt = require('jsonwebtoken');
const model = require('./main')
const Imagemodel = require('./images')
const app = express();
const port = 3001;
const helmet = require('helmet')
app.use(helmet());
const secretKey = 'your-secret-key';
var bcrypt = require('bcryptjs');
const cors = require('cors');
const { log } = require('console');
app.use(express.json());
const corsConfig = {
  origin: '*',
  credentials: true,
  allowedHeaders: 'Origin,X-Requested-With,Content-Type,Accept,Authorization,x-access-token',
};
app.use(cors(corsConfig));
app.options('*', cors(corsConfig));
app.use(express.static(`${__dirname}/public`));
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
const uri = "mongodb+srv://kalaivani:kalai2001@cluster0.lla9wfo.mongodb.net/chatapp"
const connectDb = () => {
    mongoose.connect(uri).then(() =>
        console.log("MongoDB connected")
    )
        .catch((err) => console.log("error", err));

}
connectDb();

const storage = multer.diskStorage({
  destination:(req,file,cb)=>{
    cb(null, "public/Images")
  },
  filename:(req, file, cb)=>{
    cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname))
  }
})  
const upload = multer({
  storage:storage
})

// generate token for that

app.post('/sigin',async (req, res) => { 
    const token = jwt.sign(req.body, secretKey);
    const {userName, email, password, role}=req.body
 
    const myEncPassword =await bcrypt.hash(password, 10)
    console.log(myEncPassword);
    let payload={
        userName:req.body.userName,
        email:req.body.email,
        password:myEncPassword,
        role:req.body.role,
        token:token
    }
    console.log(payload);
  const user = await model.create(payload)

  res.json({ "message": "Sign In successfully", "data": user });
});

// authenticated 
app.get('/protected', (req, res) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Missing authorization token' });
  }

  try {
    const decoded = jwt.verify(token, secretKey);

    res.json({ message: 'Token authenticated', payload: decoded });
  } catch (error) {
    console.error('Token verification failed:', error.message);
    res.status(403).json({ message: 'Invalid token' });
  }
});

//login scienario
app.post('/login',async (req, res) => {
    let payload={
        email:req.body.email,
        
    }
  const user = await model.findOne(payload)
  if (user) {
    const result = req.body.password === user.password;
    if (result) {
      if(user.role=="admin"){
        res.json({ "message": "Login In successfully", "data": user });
      }
      else{
        res.status(400).json({ error: "Not Vaild User" })
      }
    } else {
      res.status(400).json({ error: "password doesn't match" });
    }
  } else {
    res.status(400).json({ error: "User doesn't exist" });
  }
 
 });

 //get users
app.get('/allusers',async (req, res) => {
    const user = await model.find()
    res.json({ "message": "user Listed successfully", "data": user });
  })

//update user
app.put('/updateuser',async (req, res) => {
   
    let payload={
        userName:req.body.userName,
        email:req.body.email,
        password:req.body.password,
        role:req.body.role,
        _id:req.body._id
    }
    const user = await model.findOneAndUpdate({_id:req.body._id},payload,{new:true})
    res.json({ "message": "user updated successfully", "data": user });
  })

  //upload file

//   var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//        cb(null, 'public/Images');
//     },
//     filename: function (req, file, cb) {
//        cb(null, Date.now() + '-' + file.originalname);
//     }
//  });


//  var upload = multer({ storage: storage });
//  console.log(upload);
  app.post("/upload",upload.single("files"),async(req, res)=>{
   console.log("req",req);
   console.log("req",req.body);

    const image=req.body.name
    console.log("image",req.body.name);
    const user = await Imagemodel.create({image:image})
  //   console.log("user",user);
    res.json({ "message": "user updated successfully", "data": user });
  })
  app.get('/uploadImage',async (req, res) => {
    const user = await Imagemodel.find()
    res.json({ "message": "user Listed successfully", "data": user });
  })

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});




