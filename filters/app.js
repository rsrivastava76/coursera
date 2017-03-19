(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController)
.filter('love', loveFilter)
.filter('fact', factFilter);


LunchCheckController.$inject = ['$scope', '$filter'];
function LunchCheckController($scope, $filter) {
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
      var msg = "Please enter data first";
      $scope.message = $filter('uppercase')(msg);
    } else {
      var arrOfStr = input.split(",");

      if (arrOfStr.length > 3) {
        $scope.message = "Too much!";
        $scope.foodCost = 55.2;
      } else {
          $scope.message = "Enjoy your healthy Day!";
          $scope.foodCost = .88;
      }
    }
  };
}

function loveFilter() {
  return function (input) {
    input = input || "";
    input = input.replace("healthy", "lovely");
    return input;
  };
}

function factFilter() {
  return function (input) {
    input = input || "";
    input = input.replace("R", "$");
    return input;
  };
}


})();
