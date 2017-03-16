(function () {
  'use strict';

angular.module('myFirstApp',[])

.controller('MyFirstController', function($scope){
$scope.name = "Ritesh Srivastava";
$scope.sayHello = function() {
  return "Hello Coursera!!!";
};
});

})();
