var express=require('express');
var api=express.Router();

api.get('/whoami',(req,res,next)=>{
  let result={ipaddress: req.ip,language: req.headers["accept-language"],software: req.headers["user-agent"]};
  res.send(result);
});

module.exports=api;