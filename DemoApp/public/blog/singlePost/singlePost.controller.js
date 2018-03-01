angular.module("blogApp")
    .controller("singlePostController",['$scope','$route','$routeParams',singlePostController]);
    
function singlePostController($scope,$route,$routeParams){
          $scope.id = $routeParams.id
}