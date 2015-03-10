var mainApp = angular.module("mainApp", ['ngRoute']);

mainApp.config(['$routeProvider',
 function($routeProvider) {
    $routeProvider.
       when('/main', {
          templateUrl: 'main.htm',
          controller: 'mainController'
       }).
       when('/viewStudents', {
          templateUrl: 'viewStudents.htm',
          controller: 'ViewStudentsController'
       }).
       otherwise({
          redirectTo: '/main'
       });
 }]);

 mainApp.controller('mainController', function($http, $scope) {
    $scope.message = "This page will be used to display add student form";
     
     $scope.companyData = function(){
         var companyName = document.getElementById("companyName").value;
         var companyAddress = document.getElementById("companyAddress").value;
         var companyPrintName = document.getElementById("printName").value;
         var companyCin = document.getElementById("cin").value;
         var companyShortName = document.getElementById("shortName").value;
         var companyItPan = document.getElementById("itPan").value;
         var companyCountry = document.getElementById("country").value;
         var companyTelNo = document.getElementById("telNumber").value;
         var companyState = document.getElementById("state").value;
         var companyFax = document.getElementById("fax").value;
         var companyFyBeggining = document.getElementById("fyBeggining").value;
         var companyEmail = document.getElementById("email").value;
         var companyCurrency = document.getElementById("currency").value;
         var companyCurrencyString = document.getElementById("currencyString").value;
         var companySubString = document.getElementById("currencySubString").value;
         var companyCurrencyFont = document.getElementById("currencyFont").value;
         var companyCurrencyCharacter = document.getElementById("currencyCharacter").value;
         var companyEnableVat = document.getElementById("vat").value;
         var companyTypeVat = document.getElementById("typeOfVat").value;
         var companyEnableAddTax = document.getElementById("enableAddTax").value;
         var companyTin = document.getElementById("tin").value;
         var companyCst = document.getElementById("cst").value;
         
         
         var userName = document.getElementById("username").value;
         var password = document.getElementById("password").value;
         
         var login_data_json = {company_name:companyName,user_name:userName,password:password};
         
         
         var company_data_json = {company_name:companyName, company_address:companyAddress, company_print_name:companyPrintName, company_cin:companyCin, company_short_name:companyShortName, company_it_pan:companyItPan, company_country:companyCountry, company_tel_no:companyTelNo, company_state:companyState, company_fax:companyFax, company_fy_beggining:companyFyBeggining, company_email:companyEmail, company_currency_symbol:companyCurrency, company_currency_string:companyCurrencyString, company_sub_string:companySubString, company_currency_font:companyCurrencyFont, company_currency_character:companyCurrencyCharacter, company_enable_vat:companyEnableVat, company_enable_vat_type:companyTypeVat, company_enable_add_tax:companyEnableAddTax, company_tin:companyTin, company_cst_no:companyCst};
         
         
         $http.post('/newCompany/Data/'+ JSON.stringify(company_data_json)+'/'+JSON.stringify(login_data_json)).success(function (response) {
                        console.log(response);
                    }).error(function (err) {
                        console.log(err);
                    });
         
     }
     
     $scope.searchCompany = function(){
         $http.get('/getAllCompanies').success(function (response) {
             $scope.allCompanies = response;
             console.log(response);
        }).error(function (err) {
            console.log(err);
        });
     }
     
     $scope.showCompanyData = function(){
         var companyName = document.getElementById("searchCompany").value;
         console.log(companyName);
         
         $http.get('/getCompany/Detail/'+companyName).success(function (response) {
             $scope.companyDetail = response;
             
             $scope.val = "12333";
             
             console.log(response);
             
             $("#modifyCompanyDetails").show();
        }).error(function (err) {
            console.log(err);
        });
         
     }
     
     
 });

 mainApp.controller('ViewStudentsController', function($scope) {
    $scope.message = "This page will be used to display all the students";
 });