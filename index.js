console.log('hello')

const express=require('express')
const app=express();
 
const multer=require('multer')
require('dotenv').config();

app.post('/fileupload',(req,res)=>{
    console.log(req.body)
    res.status(201).json({msg:'okk'})
})



const port=process.env.port
app.listen(port,()=>{
    console.log(`this port on running on port${port}`)
})