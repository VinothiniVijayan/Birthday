app.controller("welcomeCtrl",['$scope','$rootScope','$timeout','$interval',function($scope,$rootScope,$timeout,$interval,$modalInstance){

    $scope.timerS = $interval(function(){
		console.log("Timer",$rootScope.newPage);
        $scope.showButton = false;
	    var countDownDate = new Date("May 28, 2017 00:53:00").getTime();
		var now = new Date().getTime();
		if(countDownDate > now){
		    console.log("Show Timer");
		    $scope.showButton = false; 
      		$scope.showTimer = true;
			$scope.birthdayImage = false;
			// Find the distance between now an the count down date
			var distance = countDownDate - now;
			$scope.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			$scope.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			$scope.seconds = Math.floor((distance % (1000 * 60)) / 1000);
			console.log($scope.seconds);
			if($scope.hours == 0 && $scope.minutes == 0 && $scope.seconds == 0){
     			$scope.callStopTimer();
			} else {
			    $scope.hitTimer = true;
			}
		}else{
			$scope.callStopTimer();
		}
	},1000);
	
	$scope.callStopTimer = function(){
	    
		console.log("Timer",$rootScope.newPage);
		$scope.birthdayImage = true;
		$scope.showButton = false; 
		if($rootScope.newPage == undefined){
		$scope.showTimer = true;
		$timeout(function(){
        	$scope.showTimer = false;
		    $scope.showButton = true;
			$scope.wishingPopup.show();
			$timeout(function(){
	            $scope.wishingPopup.hide();
	        },20000);
		},5000);
		} else {
			$scope.showButton = true;
		}
	    $interval.cancel($scope.timerS);
	}
	
	$scope.welcomeTo = function(){
	    $scope.buttonPopup.show(); 
		//$scope.navi.pushPage('views/home.html',{animation:'top'});
	}
}]);
app.controller('buttonCtrl',['$scope',function($scope){
	$scope.go = function(){
	    var passText = $scope.passwordText;
	    console.log(passText);
	    if(passText == null || passText == undefined){
			ons.notification.alert({title:"OOPS",message:"Know your secret code to open your suprise"});
		} else if(passText == "Memories"){
			console.log("Memories");
			$scope.navi.pushPage('views/slide.html',{animation:"lift"});
		} else if(passText == "Rewind"){
			console.log("Rewind");																								
			$scope.navi.pushPage('views/rewind.html',{animation:"lift"});
		} else if(passText == "Between Us"){
			console.log("Between Us");
			$scope.navi.pushPage('views/story.html',{animation:"lift"});
		} else {
			ons.notification.alert({title:"OOPS",message:"Know your secret code to open your suprise"});			
		}
	}
}]);