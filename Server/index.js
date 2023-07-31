const express = require('express');
const mongoose= require('mongoose');
const inputImage = require('./models/inputSchema');
const { cloudinary,storage } = require('./Cloudinary');
const multer = require('multer');
const cors =require('cors');
const path =require('path');
if (process.env.NODE_ENV!=="production") {
  require('dotenv').config()
}

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.db_url)
        .then(()=>{
          console.log("Connnected Sucessfully")
        })
        .catch((err)=>{
          console.log(err.message);
        });
const upload =multer({
  storage:storage
})


app.post('/upload',upload.single('file'),async(req,res)=>{
  const camp =new inputImage(req.file);
  camp.url=req.file.path;
  camp.filename=req.file.filename;
  await camp.save(); 
  console.log(req.file.path);
})
app.get('/',(req,res)=>{
  res.send("home page")
})
app.listen(4000,()=>{
    console.log("Server Started at 4000")
})