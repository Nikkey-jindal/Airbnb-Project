const express=require("express");
const userRouter=express.Router();
userRouter.get("/add-home",(req,res,next)=>{
  res.send(`<form action="/add-home" method="POST">
    <input type="text" name="home" placeholder="enter your house name">
    <button type="submit">Submit</button>
    </form>`)
})
module.exports=userRouter;