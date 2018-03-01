angular.module("blogApp")
.directive("createPost",['navigation','blogService','toaster','$location',function(navigation,blogService,toaster,$location){return new createPostDirective(navigation,blogService,toaster,$location)}]);

function createPostDirective(navigation,blogService,toaster,$location){
    
    var self = this;

     self.restrict = 'E'; /* restrict this directive to elements */      
     self.templateUrl="blog/createPost/createPost.directive.view.html";
     self.scope={
         postCreated:'&'
     }

     self.link = function($scope,$element){

            setupProperties();

            setupGuiHandlers();

            setupWatches();

            function setupProperties(){
                $scope.post={};
            }

            function setupGuiHandlers(){
                $scope.createPost = createPost
            }

            function setupWatches(){

            }

            function createPost(isValid){
               alert(isValid);
               console.log($scope.post);

                blogService.createPost($scope.post).then(postCreatedSuccessfully,postCreationFailed);             
            }

            function postCreatedSuccessfully(response){
               $scope.postCreated({post:response.data})

              // navigation.navigateTo('posts');
              toaster.pop('success','Post','Post Created Successfully!');
              $location.path('/blog');
                
            }

            function postCreationFailed(errorResponse){
                console.log(errorResponse)
            }
     }

};
