angular.module("blogApp")
    .controller("contactController",['$scope',contactController]);
    
function contactController($scope){


    $scope.title = "Contact Page";
    
    $scope.content = "This contain contact page content"

}