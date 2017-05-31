app.controller("homeCtrl",['$scope','$timeout','$interval',function($scope,$timeout,$interval,$modalInstance){

	$scope.wishingPopup.show();
	$timeout(function(){
	    $scope.wishingPopup.hide();
	},10000);
	
	$scope.welcomeTo = function(){
	    $scope.buttonPopup.show();
		//$scope.navi.pushPage('views/home.html',{animation:'top'});
	}
}]);
app.controller('buttonCtrl',['$scope',function($scope){
	$scope.secret = [{"secrets":"Rewind Back","page":"home"},{"secrets":"Memories","page":"slide"},{"secrets":"Between Us","page":"story"}];
	$scope.go = function(){
	    var passText = $scope.passwordText;
	    console.log($scope.passwordText);
	    if(passText == null || passText == undefined){
			ons.notification.alert({title:"OOPS",message:"Know your secret code to open your suprise"});
		} else if(passText == "Memories"){
			$scope.navi.pushPage('views/slide.html',{animation:"left"});
		} else if(passText == "Rewind Back"){
			$scope.navi.pushPage('views/home.html',{animation:"left"});
		} else if(passText == "Between"){
			$scope.navi.pushPage('views/story.html',{animation:"left"});
		} else {
			ons.notification.alert({title:"OOPS",message:"Know your secret code to open your suprise"});			
		}
	}
}]);