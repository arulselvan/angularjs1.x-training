angular.module("blogApp",["ngRoute","ngAnimate","toaster"]);

function AppDetail(title) {
    this.title = title;
}

angular.module("blogApp")
    .provider("appDetail", function () {
        var self = this;
        self.title = "Default";
        this.setTitle = function (title) {
            self.title = title;
        }
        this.$get = function () {
            return new AppDetail(self.title);
        }
})


angular.module("blogApp")
    .config(function ($provide, appDetailProvider, $routeProvider,$locationProvider) {

        $provide.constant('apiRoot', "https://jsonplaceholder.typicode.com");

        appDetailProvider.setTitle("My Blog");

        $routeProvider
           .when('/blog',{
               templateUrl:"blog/blog.view.html",
               controller:"blogController"
           })
           .when('/blog/:id',{
               templateUrl:"blog/singlePost/singlePost.view.html",
               controller:"singlePostController"
           })
           .when('/about',{
               templateUrl:"about/about.view.html"
           })
           .when('/contact',{
               templateUrl:"contact/contact.view.html",
               controller:"contactController"
           })
           .when('/create-post',{
               templateUrl:"blog/createPost/createPost.view.html",
               controller:"createPostController"
           })
           .otherwise({
         	   redirectTo: '/blog'
           });

           $locationProvider.html5Mode(true);
    })


