var app = angular.module('passCard', []);

app.controller('PassControl', function($scope, $http, $interval) {
    // $scope.loadData = function() {
        $http.jsonp('http://localhost:3000/members?q={ "email": "example@gmail.com" }&callback=JSON_CALLBACK', {})
            .success(function(resp) {
                console.log(resp)
                $scope.name = resp.members[0].name;
                $scope.cardno = resp.members[0].cardno;
        });
    // };

    // $scope.loadData();
    // $interval($scope.loadData, 1000 * 10); // 10 sec


    $scope.message = function() {
        if($scope.cardno) {
            return 'Pass';
        }else {
            return 'False';
        }
    };
});
