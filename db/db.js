  var fs = require("fs"),
        sqlite3 = require('sqlite3').verbose(),
        TransactionDatabase = require("sqlite3-transactions").TransactionDatabase,
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

var database = exports.createdb = function(){

    db.run('CREATE TABLE IF NOT EXISTS companyData (company_id INTEGER PRIMARY KEY AUTOINCREMENT, company_name TEXT, company_address TEXT, company_print_name TEXT, company_cin INTEGER, company_short_name TEXT, company_it_pan INTEGER, company_country TEXT, company_tel_no TEXT, company_state TEXT, company_fax INTEGER, company_fy_beggining TEXT, company_email TEXT, company_currency_symbol TEXT, company_currency_string TEXT, company_sub_string TEXT, company_currency_font TEXT, company_currency_character TEXT, company_enable_vat TEXT, company_enable_vat_type TEXT, company_enable_add_tax TEXT, company_tin TEXT, company_cst_no TEXT)');
    
    db.run('CREATE TABLE IF NOT EXISTS login(login_id INTEGER PRIMARY KEY AUTOINCREMENT, company_name TEXT, user_name TEXT, password TEXT)');
}