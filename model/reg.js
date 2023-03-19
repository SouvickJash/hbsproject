const mongoose=require('mongoose');
const data=new mongoose.Schema({
     Name:{
      type:String,
      required:true
     },
     Email:{
      type:String,
      required:true
     },
     Password:{
      type:String,
      required:true
     },
     ConfirmPassword:{
       type:String,
       required:true
     } 
})
const example=new mongoose.model("student",data);
module.exports=example;