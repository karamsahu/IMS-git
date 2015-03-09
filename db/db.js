/*var fs = require("fs"),
    sqlite3 = require('sqlite3').verbose(),
    TransactionDatabase = require("sqlite3-transactions").TransactionDatabase,
    logger = require('../logger/logger');

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

db.run('CREATE TABLE IF NOT EXISTS companyData (company_id INTEGER PRIMARY KEY AUTOINCREMENT, company_name TEXT, company_address TEXT)');*/