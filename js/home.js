app.controller("homeCtrl",['$scope',function($scope){
    console.log("Home"); 
	var list = [{'image':'./img/image1.jpg','content':'Image 1'},
		{'image':'./img/image2.jpg','content':'Image 1'},
			{'image':'./img/image3.png','content':'Image 1'}]
	$scope.List = angular.copy(list);
}])