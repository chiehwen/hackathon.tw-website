var app = angular.module('passCard', []);

app.controller('PassControl', function($scope, $http, $interval) {
    $scope.loadData = function() {
        $http.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk').success(function(resp) {
            console.log(resp);
            $scope.name = resp.name;
        });
    };

    $scope.loadData();
    $interval($scope.loadData, 1000 * 10); // 10 sec
});
