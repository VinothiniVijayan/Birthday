app.controller('slideCtrl',['$scope',function($scope){

	$scope.slideImages = [{'image':'img/slides/1.jpg'},{'image':'img/slides/2.jpg'},{'image':'img/slides/3.jpg'},{'image':'img/slides/4.jpg'},{'image':'img/slides/5.jpg'},{'image':'img/slides/6.jpg'},{'image':'img/slides/7.jpg'},{'image':'img/slides/8.jpg'},{'image':'img/slides/9.jpg'},{'image':'img/slides/10.jpg'}
	,{'image':'img/slides/11.jpg'},{'image':'img/slides/12.jpg'},{'image':'img/slides/13.jpg'},{'image':'img/slides/1.jpg'},{'image':'img/slides/1.jpg'},{'image':'img/slides/1.jpg'},{'image':'img/slides/1.jpg'},{'image':'img/slides/1.jpg'},{'image':'img/slides/1.jpg'},{'image':'img/slides/1.jpg'},{'image':'img/slides/1.jpg'}
	,{'image':'img/slides/1.jpg'},{'image':'img/slides/1.jpg'},{'image':'img/slides/1.jpg'},{'image':'img/slides/1.jpg'},{'image':'img/slides/1.jpg'},{'image':'img/slides/1.jpg'},{'image':'img/slides/1.jpg'},{'image':'img/slides/1.jpg'},{'image':'img/slides/1.jpg'},{'image':'img/slides/1.jpg'},{'image':'img/slides/1.jpg'},{'image':'img/slides/1.jpg'}
	,{'image':'img/slides/1.jpg'},{'image':'img/slides/1.jpg'},{'image':'img/slides/1.jpg'},{'image':'img/slides/1.jpg'},{'image':'img/slides/1.jpg'},{'image':'img/slides/1.jpg'},{'image':'img/slides/1.jpg'},{'image':'img/slides/1.jpg'},{'image':'img/slides/1.jpg'},{'image':'img/slides/1.jpg'},{'image':'img/slides/1.jpg'}
	,{'image':'img/slides/1.jpg'},{'image':'img/slides/1.jpg'},{'image':'img/slides/1.jpg'},{'image':'img/slides/1.jpg'},{'image':'img/slides/1.jpg'},{'image':'img/slides/1.jpg'}]; 
	
	$scope.back = function(){
	    $rootScope.newPage = "Slide";
		$scope.navi.popPage();
	}
}])