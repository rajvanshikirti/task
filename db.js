const mongoose = require('mongoose');
require("dotenv").config();
const url=process.env.MONGO_URI;
const DB_NAME=process.env.DB_NAME;
mongoose.connect(url,{
   dbName:DB_NAME,
}).then(
    ()=>{
console.log("connected to database");
})
.catch((err)=>{
   console.log("error while connecting")
});