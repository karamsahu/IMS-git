var express=require("express");
var app=express();

app.get('/',function(req,res){
      res.sendfile("index.html");
});

app.get('/style/main.css',function(req,res){
      res.sendfile("./style/main.css");
});

app.get('/scripts/main.js',function(req,res){
      res.sendfile("./scripts/main.js");
});

app.get('/db/db.js',function(req,res){
      /*res.sendfile("./db/db.js");*/
    
/*    var fs = require("fs"),
    sqlite3 = require('sqlite3').verbose(),
    TransactionDatabase = require("sqlite3-transactions").TransactionDatabase,
    logger = require('./logger/logger');

appFolder = process.env.USERPROFILE + "\\Paxcom",
dbFile = appFolder + "\\company.db",
existFolder = fs.existsSync(appFolder);
existFile = fs.existsSync(dbFile);

if (!existFolder) {
    console.log("Creating DB folder " + appFolder);
    fs.mkdir(dbFolder);
}

if (!existFile) {
    console.log("Creating DB file " + dbFile);
    fs.openSync(dbFile, "w");
}

var db = exports.db = new TransactionDatabase(new sqlite3.Database(dbFile, sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE));

db.run('CREATE TABLE IF NOT EXISTS companyData (company_id INTEGER PRIMARY KEY AUTOINCREMENT, company_name TEXT, company_address TEXT)');
 */   
    
});

app.listen(5000,function(){
    console.log("Working on port 5000");
});