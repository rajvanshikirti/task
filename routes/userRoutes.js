const express=require("express");
const User=require("../models/User");
const router=express.Router();
router.get("/",(req,res)=>{
    res.send("routes are working");
});
router.post('/register',async(req,res)=>{
    const{name,email,password}=req.body;
    const user=new User({name,email,password})
});
router.post('/login',async(req,res)=>{
   
});

module.exports=router;