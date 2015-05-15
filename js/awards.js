var app = angular.module('hackathon', []);

app.controller('AwardsController', function($scope, $http) {
    $http.jsonp('http://localhost:3000/ranking?callback=JSON_CALLBACK', {}).success(function(resp) {
        console.log(resp)
        $scope.members = resp.members;
    });

    $scope.timelineStyle = function(index) {
        if(index % 2 !== 0) {
            return 'timeline-inverted';
        }
    };
});
