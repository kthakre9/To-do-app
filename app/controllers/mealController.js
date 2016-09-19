module.exports = angular.module('mealsApp')

.controller('mealController', ['$scope', '$http' , '$state', function ($scope, $http, $state) {

  $http.get('/meals').success(function(response){
    $scope.meals = response;
    console.log($scope.meals);
  });

  $scope.createMeal = function() {
    var breakfast = $scope.breakfast;
    var lunch = $scope.lunch;
    var dinner = $scope.dinner;
    var snacks = $scope.snacks;

    console.log("createMeal function", breakfast);
    console.log("createMeal function", lunch);
    console.log("createMeal function", dinner);
    console.log("createMeal function", snacks);

    var data = {
      breakfast:breakfast,
      lunch:lunch,
      dinner: dinner,
      snacks:snacks
    }

    $http.post('/meals', data).success(function (response){
      console.log("response", response);
      $state.go('app');
    }).error(function (response) {
      console.log('Error: ' + response);
    });
  };
}]);
