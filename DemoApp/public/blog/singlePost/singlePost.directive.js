angular.module("blogApp")
.directive("singlePost",['blogService',function(blogService){return new singlePostDirective(blogService)}]);

function singlePostDirective(blogService){
    
    var self=this;

     self.restrict = 'E'; /* restrict this directive to elements */      
     self.templateUrl="blog/singlePost/singlePost.directive.view.html";
     self.scope={
         postId:'='
     }

     self.link = function($scope,$element){
            setupProperties();

            setupGuiHandlers();

            setupWatches();

            function setupProperties(){
                $scope.post =null;
            }

            function setupGuiHandlers(){

            }

            function setupWatches(){
                $scope.$watch('postId',postIdChanged)
            }

            function postIdChanged(newPostId,oldPostId){
                if(newPostId){
                    getPostFromServer(newPostId)
                }
            }

            function getPostFromServer(postId){
                //$scope.post = {id:1,title:"Sample Single Post", body:"Sample post content"}
                blogService.getPostById(postId).then(getPostByIdCompleted)
            }

            function getPostByIdCompleted(response){
                    $scope.post = response.data;
            }
     }

};
