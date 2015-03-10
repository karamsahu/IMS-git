var express=require("express");
var app=express();

var db = require('./db/db');
var companyDB = require('./companyDAO/companyDB')
var logger = require('./logger/logger');

app.get('/',function(req,res){
      res.sendfile("index.html");
});

app.get('/style/main.css',function(req,res){
      res.sendfile("./style/main.css");
});

app.get('/scripts/main.js',function(req,res){
      res.sendfile("./scripts/main.js");
});

app.get('/db',function(req,res){
      db.createdb();
});

app.post('/newCompany/Data/:company_data/:login_data', function (req, res) {
    
    
    var companyData = JSON.parse(req.params.company_data);
    var loginData = JSON.parse(req.params.login_data);
    
    companyDB.createCompany(companyData, loginData, function(result){
        console.log(result);
    });
    
    res.send("server");
   
});

app.get('/getAllCompanies', function(req, res){
    companyDB.getAllCompanies(function(result){
        res.send(result);
    });
});

app.get('/getCompany/Detail/:companyName', function(req, res){
    
    companyDB.getCompanyDetails(req.params.companyName, function(result){
        res.send(result);
    });
    
});


app.listen(5000,function(){
    console.log("Working on port 5000");
});