angular.module("blogApp")
    .controller("blogController",['$scope','$filter','$q','$timeout','appDetail','navigation','$injector',blogController]);
    
function blogController($scope,$filter,$q,$timeout,appDetail,navigation,$injector){
          
    $scope.appObj = $injector.get('appDetail');

    $scope.title = appDetail.title;

    $scope.navigation = navigation;

    $scope.posts =[];
    $scope.selectedPost = null;

    $scope.postCreated = function(post){
        $scope.posts.unshift(post);
    }

    $scope.selectPost = function(post){
        $scope.selectedPost = post;
        $scope.title = $filter('uppercase')($scope.title);
        //$scope.selectSection('singlePost');
        navigation.navigateTo('singlePost');
    }

}
