module.exports = angular.module('mealsApp')
    .controller('mealDetailController', ['$scope', '$http' , '$stateParams', function ($scope, $http, $stateParams) {
        var parameters = {
            id: $stateParams.id
        };
        var config = {
            params: parameters
        };

        $http.get('/meals/:id', config).success(function(response){
            $scope.meal = response[0];
        });


        $scope.updateMeal = function(){
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

            $http.put('/meals/:id', data, config).success(function(response){
                console.log("response back", response);
                // $scope.meal = response[0];
            });

        };

    }]);