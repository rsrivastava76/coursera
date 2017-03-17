(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.message = "";
  $scope.lunch = "list comma separated dishes you usually have for lunch";

  $scope.clear = function() {
    var input = $scope.lunch;
    if(input === "list comma separated dishes you usually have for lunch"){
      $scope.lunch = "";
    }
  };

  $scope.feed = function () {
    var input = $scope.lunch;

    if(input.length === 0 || input === "list comma separated dishes you usually have for lunch"){
      $scope.message = "Please enter data first";
    } else {
      var arrOfStr = input.split(",");

      if (arrOfStr.length > 3) {
        $scope.message = "Too much!";
      } else {
          $scope.message = "Enjoy!";
      }
    }
  };
}

})();
