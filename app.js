const express = require('express');
const app = express();
const port= 3000 ;
const mongoose=require ('mongoose')
const url="mongodb+srv://m001-student:SAK@1718@sandbox.nydk4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(url,{
    useNewUrlParser=true,
      
})

const con=mongoose.connection

con.on("open",function(){
    console.log("acjkashffjadshfkahs")
})