var express = require("express");

var app=express();

app.use(express.static(__dirname+"/public"));
app.use(express.static(__dirname+"/node_modules"));


app.listen(3000,()=> console.log("Demo App Listening on port 3000"))