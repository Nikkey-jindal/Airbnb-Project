const express=require("express");
const bodyParser = require("body-parser");
const userRouter=require("./routes/userRouter");
const path=require("path");
const app=express();
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, "public")));
app.use((req,res,next)=>{
  console.log(req.method,req.url);
  next();
})
app.use(userRouter);
app.get("/",(req,res,next)=>{
 res.sendFile(path.join(__dirname,'views','home.html'));
})

app.post("/add-home",(req,res)=>{
 res.sendFile(path.join(__dirname,'views','addhome.html'));
  console.log(req.body);
})
app.use((req,res,next)=>{
  res.status(404).sendFile(path.join(__dirname,'views','pageNotFound.html'));
})
app.listen(3030,()=>{
  console.log("something done in express js by myself...");
})