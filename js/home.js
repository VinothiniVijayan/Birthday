var listCount;
app.controller("homeCtrl",['$scope',function($scope){
    console.log("Home"); 
	var list = [{'image':'./img/image1.jpg','content':'Image 1'},
		{'image':'./img/image2.jpg','content':'Image 1'},
			{'image':'./img/image3.png','content':'Image 1'}];
	$scope.List = angular.copy(list);
	$scope.flipCount = 0;
    $scope.totalCount = $scope.List.length;
	listCount = $scope.List.length;
	swipeLeft = function () {
 		$('.bb-item').on('swipeleft', function(){
 			bb.next();
			if( $scope.flipCount < $scope.totalCount - 1 ) {
		    	$scope.flipCount += 1;
		    }
			console.log($scope.flipCount);
			/*if( $scope.flipCount < 2 ) {
				$scope.flipCount += 1;
			}*/
			return false;
 		});
    };
    swipeRight = function () {
    	$('.bb-item').on('swiperight', function(){
    		bb.prev();
		    if( $scope.flipCount >  0) {
		    	$scope.flipCount -= 1;
		    }
			console.log($scope.flipCount);
			/*if( $scope.flipCount > 1 ) {
				$scope.flipCount -= 1;
			}*/
			return false;
    	});
    };
	DOMCheck = function(DOM, callbackFunc) {
    	console.log('start DOMCheck');
        try {
            if (DOM) {
                var intFlag;
                if ($(DOM).length <= 0) {
                    intFlag = setInterval(function() {
                        setTimeout(function() {
                            clearInterval(intFlag);
                        }, 10000);
                        if ($(DOM).length > 0) {
                            clearInterval(intFlag);
                            callbackFunc();
                        }
                    }, 100);
                } else {
                    callbackFunc();
                }
                console.log('DOM check last element loaded');
            }
        } catch (e) {
            console.log('Error in DOMCheck function' + e);
        }
    }
}])