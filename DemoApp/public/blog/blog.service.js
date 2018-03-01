angular.module("blogApp")
    .service("blogService",['$http','apiRoot',blogService]);

function blogService($http,apiRoot){
    var self=this;
    var postURLBase = apiRoot+"/posts"
    
    self.getPostList = function(){
        return $http.get(postURLBase);
    }

    self.getPostById = function(postId){
        return $http.get(postURLBase+"/"+postId); 
    }

    self.createPost = function (post){
        return $http.post(postURLBase,post);
    }

    self.getCommentsByPostId = function(postId){
        return $http.get(apiRoot+"/comments?postId="+postId);
    }
}
    