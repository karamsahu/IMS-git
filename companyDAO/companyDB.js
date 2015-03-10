var db = require('../db/db').db;

exports.createCompany = function(companyData, logInData, cb){
    
    createLogIn(logInData, function(){
        console.log("logIn done");
    });
    createCompany(companyData, function(){
        console.log("created company");
        cb("all done");
    });
}

var createLogIn = function(logInData){
    
    console.log('Creating login ' + JSON.stringify(logInData));
    db.beginTransaction(function (err, transaction) {
        var query = "INSERT INTO login ( ";
        var values = " VALUES ( ";
        for (var prop in logInData) {
            if (logInData[prop]) {
                query = query + prop + " , ";
                values = values + " '" + logInData[prop] + "', ";
            }
        }
        query = query.substring(0, query.length - 2) + " ) " + values.substring(0, values.length - 2) + " ) ";
        transaction.exec(query);
        transaction.commit(function (dbErr) {
            
        });
    });
}

var createCompany = function(companyData){
    
     console.log('Creating company ' + JSON.stringify(companyData));
    db.beginTransaction(function (err, transaction) {
        var query = "INSERT INTO companyData ( ";
        var values = " VALUES ( ";
        for (var prop in companyData) {
            if (companyData[prop]) {
                query = query + prop + " , ";
                values = values + " '" + companyData[prop] + "', ";
            }
        }
        query = query.substring(0, query.length - 2) + " ) " + values.substring(0, values.length - 2) + " ) ";
        transaction.exec(query);
        transaction.commit(function (dbErr) {
            
        });
    });
}

exports.getAllCompanies = function(cb){
    var selectQuery = 'SELECT company_name from companyData';
    
    db.all(selectQuery, function(err, rows){
        var data = [];
        if(rows){
            rows.forEach(function(row){
                data.push(row);
            });
            cb(data);
        }else{
            cb({});
        }
    });
    
}

exports.getCompanyDetails = function(companyName, cb){
    console.log(companyName);
    var selectQuery = 'SELECT * from companyData where company_name = ?';
    
    db.all(selectQuery,[companyName], function(err, rows){
        var data = [];
        if(rows){
            rows.forEach(function(row){
                data.push(row);
            });
            cb(data);
        }else{
            cb({});
        }
    });
}