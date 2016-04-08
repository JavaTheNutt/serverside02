angular.module('myApp')
.factory('recordCompanies', function ($http, $log) {
    return{
        getAllCompanies: function (successCallback) {
            $http.get('../api/record_companies/get_companies.php?all').then(function (res) {
                successCallback(res);
            });
        }
    }
});