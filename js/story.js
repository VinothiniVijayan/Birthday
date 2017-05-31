app.controller('storyctrl',['$scope',function($scope){
    $scope.back = function(){
	    $rootScope.newPage = "Story";
	    $scope.navi.popPage();
	}
}])