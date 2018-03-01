angular.module("blogApp")
.directive("comment",['blogService',function(blogService){return new commentDirective(blogService)}]);

function commentDirective(blogService){
    
    var self=this;

     self.restrict = 'E'; /* restrict this directive to elements */      
     self.templateUrl="blog/comment/comment.directive.view.html";
     self.scope={
         postId:'='
     }

     self.link = function($scope,$element){
            setupProperties();

            setupGuiHandlers();

            setupWatches();

            function setupProperties(){
                $scope.comments =null;
            }

            function setupGuiHandlers(){
                $scope.addComment = addComment
            }

            function setupWatches(){
                $scope.$watch('postId',postIdChanged)
            }

            function postIdChanged(newPostId,oldPostId){
                if(newPostId){
                    getCommentsFromServer(newPostId)
                }
            }

            function getCommentsFromServer(postId){
                blogService.getCommentsByPostId(postId)
                    .then(getCommentsByPostIdCompleted)
            }

            function getCommentsByPostIdCompleted(response){
                    $scope.comments = response.data;
            }

            function addComment(){
                //need to call  api for save comment
            }
     }

};
