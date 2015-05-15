var app = angular.module('passCard', []);

app.run( function($rootScope, $location, $http) {
   $rootScope.$watch(function() {
      return $location.path();
    },
    function(a){
      var url = window.location.href;
      var index = url.indexOf('#');
      var token = url.substr(index + 1, 10);

        if(index != -1) {
          $http.jsonp('http://localhost:3000/members?q={ "token": ' + token + ' }&callback=JSON_CALLBACK', {})
            .success(function(resp) {
                $rootScope.name = resp.members[0].name;
                $rootScope.cardno = resp.members[0].cardno;
            });
        }

    });
});

app.controller('PassControl', function($scope, $http, $interval) {
    $scope.message = function() {
        if($scope.cardno) {
            return 'Pass';
        }else {
            return 'False';
        }
    };
});
