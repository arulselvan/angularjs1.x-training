angular.module("blogApp")
.directive("postList",['$http','blogService','$location',function($http,blogService,$location){return new postListDirective($http,blogService,$location)}]);

function postListDirective($http,blogService,$location){
    
    var self=this;

     self.restrict = 'E'; /* restrict this directive to elements */      
     self.templateUrl="blog/postList/postList.view.html";
     self.scope={
         posts:'=',
         selectPost:'&'
     }


     self.link=function($scope,$element){
        
        setupProperties();

        setupGuiHandlers();

        setupWatches();

        getPostListFromServer();

        function setupProperties(){

        }

        function setupGuiHandlers(){
            $scope.postClicked = postClicked
        }

        function setupWatches(){

        }


        function postClicked(post){
           // $scope.selectPost && $scope.selectPost({post:post});
            var url = "/blog/"+post.id;

           $location.path(url);
           
        }


        function getPostListFromServer(){
           
            blogService.getPostList().then(getPostListCompleted,getPostListFailed)
        }

        function getPostListCompleted(response){
             $scope.posts = response.data;
        }

        function getPostListFailed(error){
            console.log(error);
        }
     }

};
