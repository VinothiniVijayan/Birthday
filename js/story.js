app.controller('storyctrl',['$scope',function($scope){
    $scope.back = function(){
	    $scope.navi.popPage();
	}
}])