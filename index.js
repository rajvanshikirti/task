const express=require('express');
const bodyParser=require('body-parser');
const app=express();
const userRoutes=require("./routes/userRoutes");
const taskRoutes=require("./routes/taskRoutes");
require("dotenv").config();
require("./db");
const port=process.env.PORT || 3000;


app.use(bodyParser.json());
app.use("/users",userRoutes);
app.use("/tasks",taskRoutes);
app.get("/",(req,res)=>{
    res.json({message:"Welcome to the application"})
});
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});