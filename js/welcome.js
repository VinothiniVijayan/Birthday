app.controller("welcomeCtrl",['$scope','$timeout','$interval',function($scope,$timeout,$interval){

	$scope.timerS = $interval(function(){
	    var countDownDate = new Date("May 23, 2017 11:01:00").getTime();
		var now = new Date().getTime();
		if(countDownDate > now){
		    console.log("Show Timer");
		    $scope.showButton = false; 
      		$scope.showTimer = true;
			// Find the distance between now an the count down date
			var distance = countDownDate - now;
			$scope.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			$scope.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			$scope.seconds = Math.floor((distance % (1000 * 60)) / 1000);
			if($scope.hours == 0 && $scope.minutes == 0 && $scope.seconds == 0){
     			$scope.callStopTimer();
			} else if($scope.hours == 0 && $scope.minutes == 0 && $scope.seconds < 10 ){
			    $scope.hitTimer = true;
			}
		}else{
			$scope.callStopTimer();
		}
	},1000);
	
	$scope.callStopTimer = function(){
	        $scope.wishingPopup.show();
	    $timeout(function(){
	        $scope.wishingPopup.hide();
	    },20000);
		$scope.showButton = true;
    	$scope.showTimer = false;
	    $interval.cancel($scope.timerS);
	}
	
	$scope.welcomeTo = function(){
	    $scope.navi.pushPage('views/home.html',{animation:'top'})
	}
	$scope.barcode = function(){
	function hasCameraPermission() {
    cordova.plugins.barcodeScanner.hasCameraPermission(
      function(result) {
        // if this is 'false' you probably want to call 'requestCameraPermission' now
        alert(result);
      },function(error) {
	     alert(error);
	  }
    )
  }
	   cordova.plugins.barcodeScanner.scan(
      function (result) {
          alert("We got a barcode\n" +
                "Result: " + result.text + "\n" +
                "Format: " + result.format + "\n" +
                "Cancelled: " + result.cancelled);
      },
      function (error) {
          alert("Scanning failed: " + error);
      },
      {
          preferFrontCamera : true, // iOS and Android
          showFlipCameraButton : true, // iOS and Android
          showTorchButton : true, // iOS and Android
          torchOn: true, // Android, launch with the torch switched on (if available)
          prompt : "Place a barcode inside the scan area", // Android
          resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
          formats : "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
          orientation : "landscape", // Android only (portrait|landscape), default unset so it rotates with the device
          disableAnimations : true, // iOS
          disableSuccessBeep: false // iOS
      }
   );
	}
}])