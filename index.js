var express=require('express');
var app=express();
var port=process.env.PORT || 3000; 
var cors=require('cors'); //enabling cors
var path=require('path');
var api=require('./routes');
app.use(cors({optionSuccessStatus: 200}));

app.use(express.static('public')); // serving static files

app.get('/',(req,res,next)=>{
  res.sendFile(path.join(__dirname,'views','index.html'));
});

app.use('/api',api);

app.use((req,res,next)=>{
  res.status(404);
  res.send("Page Not Found");
});

app.use((err,req,res,next)=>{
  res.status(500);
  res.send("Internal Server Error");
});

var listener=app.listen(port,()=>{
  console.log("server listening at port: "+listener.address().port);
})