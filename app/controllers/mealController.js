module.exports = angular.module('mealsApp')

.controller('mealController', ['$scope', '$http' , '$state', function ($scope, $http, $state) {

  $http.get('/meals').success(function(response){
    $scope.meals = response;
  });

  $scope.createMeal = function() {
    var breakfast = $scope.breakfast;
    var lunch = $scope.lunch;
    var dinner = $scope.dinner;
    var snacks = $scope.snacks;

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

  $scope.deleteMeal = function(id){
    alert("Are you sure you want to delete this meal entry?");
    var parameters = {
      id: id
    };
    var config = {
      params: parameters
    };
    $http.delete('/meals/:id', config).success(function(response){
      console.log("response back", response);
    });
  }
}]);
