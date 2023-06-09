const express = require ("express");
const app = express();
const path = require ("path");
const port = process.env.PORT || 3000;

app.use(express.static("public"));
app.listen(port,()=>{
    console.log("Servidor escuchando en el puerto" + port);
});

app.get("/", function(req,res){
    res.sendFile(path.join(__dirname,"/views/home.html"));
});

app.get("/register", function(req,res){
    res.sendFile(path.join(__dirname,"/views/register.html"));
});

app.get("/login", function(req,res){
    res.sendFile(path.join(__dirname,"/views/login.html"));
});
