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
  };


  $http.get('/groceries').success(function (response) {

    var groceries = response;
    $scope.fruits = [];
    $scope.vegetables = [];
    $scope.beverages = [];
    $scope.dairy = [];
    $scope.breads = [];
    $scope.snacks = [];
    $scope.condiments = [];
    $scope.frozen = [];
    $scope.meats = [];
    $scope.baking = [];
    $scope.cereal = [];
    $scope.home = [];
    $scope.toiletries = [];

    angular.forEach(groceries, function(value, key) {
      console.log(value);
      console.log(value.ItemCategory);
      if(value.ItemCategory === 'Fruits'){
        $scope.fruits.push(value);
      }
      else if(value.ItemCategory === 'Vegetables'){
        $scope.vegetables.push(value);
      }
      else if(value.ItemCategory === 'Beverages'){
        $scope.beverages.push(value);
      }
      else if(value.ItemCategory === 'Dairy'){
        $scope.dairy.push(value);
      }
      else if(value.ItemCategory === 'Breads/Grains'){
        $scope.breads.push(value);
      }
      else if(value.ItemCategory === 'Snacks'){
        $scope.snacks.push(value);
      }
      else if(value.ItemCategory === 'Condiments'){
        $scope.condiments.push(value);
      }
      else if(value.ItemCategory === 'Frozen Food'){
        $scope.frozen.push(value);
      }
      else if(value.ItemCategory === ' Meat'){
        $scope.meats.push(value);
      }
      else if(value.ItemCategory === ' Baking'){
        $scope.baking.push(value);
      }
      else if(value.ItemCategory === ' Cereal'){
        $scope.cereal.push(value);
      }
      else if(value.ItemCategory === ' Home'){
        $scope.home.push(value);
      }
      else if(value.ItemCategory === ' Toiletries'){
        $scope.toiletries.push(value);
      }

    });

    console.log("fruits", $scope.fruits);
    //$scope.groceries = response;
  });
}]);
