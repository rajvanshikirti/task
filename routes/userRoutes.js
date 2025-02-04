const express=require("express");
const User=require("../models/User");
const router=express.Router();
const bcrypt =require("bcryptjs");
const jwt=require("jsonwebtoken");
router.get("/",(req,res)=>{
    res.send("routes are working");
});
router.post('/register',async(req,res)=>{
    
 try{
    const{name,email,password}=req.body;
    const user=new User({name,email,password});
    await user.save();
    res.json({message:"User created succesfully"});
 }catch(error){
    res.status(500).json({error:"Error while creating user"});
 }
});
router.post('/login',async(req,res)=>{
    try{
const {email,password}=req.body;
const user=await User.findOne({email});
if(!user){
    return res.status(404).json({message:"User not Found"});
}
const isMatch=await bcrypt.compare(password,user.password);
if(!isMatch){
    return res.status(400).json({message:"Incorrect Password"});
}

   }
   catch{
   res.status(500).json({error:"Error while Login"}) ;
   }
});

module.exports=router;