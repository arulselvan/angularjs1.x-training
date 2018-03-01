angular.module("blogApp")
.service("navigation",navigationService)

function navigationService(){
    var self=this;

    self.showPostsSection = true;
    self.showCreatePostSection = false;
    self.showSinglePost = false;

    self.selectSection= function(section){
        self.hideAllSection();

        if(section == "posts"){
            self.showPostsSection = true;
        }
        else if(section == "createPost"){
            self.showCreatePostSection = true;
        }
        else if(section == "singlePost"){
             self.showSinglePostSection = true
        }
        else{
            self.showPostsSection = true;
        }
    }

    self.hideAllSection = function(){
        self.showPostsSection = false;
        self.showCreatePostSection = false;
        self.showSinglePostSection = false;
    }

    self.navigateTo = function(sectionName){
        self.selectSection(sectionName);
     }

}