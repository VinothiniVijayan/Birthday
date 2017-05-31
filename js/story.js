app.controller('storyCtrl',['$scope','$rootScope',function($scope,$rootScope){
    $scope.back = function(){
	    $rootScope.newPage = "Story";
	    $scope.navi.pushPage('views/welcome.html',{animation:'true'});
	}
}])