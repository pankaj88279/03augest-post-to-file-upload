console.log('hello')

const express=require('express')
const app=express();

const multer=require('multer')

require('dotenv').config();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    //console.log(file)
    let randomNumber = Math.ceil(Math.random()*10000); 
    let filename = randomNumber+''+file.originalname;
   
    cb(null,file.originalname)
  }
})

const upload = multer({ storage: storage })


app.post('/fileupload', upload.single('myfile'),(req,res)=>{
  console.log(req.body.name)
  console.log(req.body.surname)
  res.status(201).json({msg:'okk'})
})




const port=process.env.port
app.listen(port,()=>{
    console.log(`this port on running on port${port}`)
})