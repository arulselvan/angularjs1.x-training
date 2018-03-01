angular.module("blogApp")
.directive("sideBar",['navigation','appDetail',function(navigation,appDetail){return new sideBarDirective(navigation,appDetail)}]);

function sideBarDirective(navigation,appDetail){
    
    var self=this;

     self.restrict = 'E'; /* restrict this directive to elements */      
     self.templateUrl="shared/sidebar/sidebar.view.html";
     self.scope={
         selectSection:'&'
     }

     self.link = function($scope,$element){

            setupProperties();

            setupGuiHandlers();

            setupWatches();

            function setupProperties(){
                $scope.title = appDetail.title;
            }

            function setupGuiHandlers(){
                $scope.navigateTo = navigateTo;

            }

            function setupWatches(){

            }

            function navigateTo(sectionName){
                //$scope.selectSection && $scope.selectSection({section:sectionName});

                navigation.navigateTo(sectionName)
            }

     }

};
