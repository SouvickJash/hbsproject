const http=require('http');
const express=require('express');
const connections=require('./db');
const example=require('./model/reg');
const port=8000;
const hbs=require('hbs');
const path=require('path');
const app=express();
const router=new express.Router();
app.use(express.json())
app.use(express.urlencoded({extended:false}))
// const bcrypt = require("bcrypt");

// const server=http.createServer((req,res)=>{
//    res.end("connection sucessfull....");
// })
app.set('view engine', 'hbs');

const publicDir = path.join(__dirname, './public')
app.use(express.static(publicDir))

app.get("/", (req, res) => {
   res.render("index")
})

app.get("/register", (req, res) => {
   res.render("register")
})

app.get("/login", (req, res) => {
   res.render("login")
})

app.post("/auth/register",async(req, res) => {    
     
     const data={
      Name:req.body.name,
      Email:req.body.email,
      Password:req.body.password,
      ConfirmPassword:req.body.comfrimpassword
     }
     console.log(data);
   await example.insertMany([data])
   res.render("index")
})

app.listen(port,"127.0.0.1",()=>{
   console.log(`listen to the port ${port}`);
})
