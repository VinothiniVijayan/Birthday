var listCount;
app.controller("homeCtrl",['$scope',function($scope){
    console.log("Home"); 
	var list = [{'image':'./img/rewind/1.jpg','content':'To date, this remains a fresh memory. There will only be some first encounters that you can count as truly unforgettable.  Both of us used come early to office. In the first week of me joining this project, One day when I came in you were applying makeup (doing something with the small mirror in your hands). Romba scene poduva nu nenachen'},
		    {'image':'./img/rewind/2.jpg','content':'Apart from the formal Good mornings that we exchange every day, this was the day you first sent me a message in whatsapp. It was actually a picture of Praveen that I asked her to send to make a meme. On that day, I sent in puzzle about relation between a girl and a boy. That was the start of our Questioning game. After this day we started questioning each other daily. Till date we keep playing this game with each other. It is the best game ever I’ve played with someone for so long without getting bored. '},
		 	{'image':'./img/rewind/3.jpg','content':'Our first trip. It was actually supposed to be for mid sea diving. I was supposed to pick you up at Thiruvanmiyur bus stand. After picking you, all of us were waiting at a coffee shop for pradeep. The plan was changed to Wild tribe Ranch at that coffee shop. I came to know a lot about you on that day. Like me, you were also interested in adventure and outdoor activities. You enjoyed our bike ride that day. You liked going fast. Both of us were interested in completing all the games over there. Overall it was a perfectly planned trip. After that trip we started feeling very comfortable around each other. '},
			{'image':'./img/rewind/4.jpg','content':'Our next trip was to vandaloor and mid sea. Zoo la nothing special but cycling was the best part. Aparam we went to sea diving. Papa was not excited because you had already been there. Jelly fish made our day there. You had a lot of fun at the beach that you were not even able to walk back from beach. We had a drive in rain and you told me that you love the way I drive. Safe and fast a drive panra nu you told. I still remember. (Enaku theriyum. Nee moodu was my reaction :P).'},
			{'image':'./img/rewind/5.jpg','content':'On the week before I left to bangalore, all of us went to a Pheonix mall. We were shopping. I liked the White la blue checks shirt you selected for me so much. After that we went to scary house. You were very scared and was holding me tightly throughout the course. At dinner Vani was telling this is the last time all of us are together and You started crying immediately and left. Again Night you called and Eruma maadu started crying again. Only after I told you that I’ll come often to see you guys, you were somewhat okay again. You wanted to come to bus stand to send me off next day. I also wanted to see you one more time before I left. But if you cry again I will feel bad nu I said not to come. '},
			{'image':'./img/rewind/6.jpg','content':'We use to call every day and kept texting. I didn’t feel like as if we missed each other so much because of our daily calls. I came to chennai a few times. Birthday ku I came to office to meet you and vidhya. Sema surprise plan panninga rendu perum. Ultimate part was asking me what to write in cake :P. '},
			{'image':'./img/rewind/7.jpg','content':'I came to chennai and you were also back from Coimbatore. Our fights and chats resumed in person. We got even closer now. And everyone started coming back from onsite. It was like a reunion of sorts. '},
			{'image':'./img/rewind/8.jpg','content':'Usha’s sister marriage trip to Hyderabad. Bus la jolly a vilayaditu pesitu ponom. We went to nizamabad in car. Car la jolly a we were playing and ne paatu padren nu solli savadichita. Aparam vani home la sema comfortable stay and we were watching bangalore days movie. Night Birla mandir, boating nu enjoyed a lot with you. Best part was the return bus journey and our talks :P.'},
			{'image':'./img/rewind/9.jpg','content':'Pongal celebration in office. Unna neraya time saree la paathu iruken. But that day semaya irundha eruma ne. Adhukagave this day was special. Jolly ya we took a lot of pics. Remember? '},
			{'image':'./img/rewind/10.jpg','content':'Vino engagement ku gift vaanga ponom. Bike ride, Dinner nu sema fun. Papa va drop pannitu I came home. Nothing more to add. You know why this date is important :P '},
			{'image':'./img/rewind/11.jpg','content':'Enjoyed a lot with you again. Lunch, Movie, Shopping nu sema fun. I enjoyed to the core. Swear on you, Life la na avlo dress try panni paathadhe illa. You made me wear so much to choose a shirt. '}];
	$scope.List = angular.copy(list);
	$scope.flipCount = 0;
    $scope.totalCount = $scope.List.length;
	listCount = $scope.List.length;
	console.log(listCount);
	$(window).ready(function(){
        $('#turnPage').turn({
            display:'double',
            acceleration: true,
            elevation:50
        });
    });

    $(window).bind('keydown',function(e){
        if (e.keyCode==37)
            $('#turnPage').turn('previous');
        else if (e.keyCode==39)
            $('#turnPage').turn('next');
    });

	swipeLeft = function () {
		console.log("Swipe left");
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
    
	$scope.slide = function(){
	    $scope.navi.pushPage('views/slide.html');
	}
	$scope.story = function(){
		$scope.navi.pushPage('views/story.html');
	}
	$scope.goToHome = function(){
		$scope.showButton = true;
		$scope.showTimer = false;
	    $scope.navi.pushPage('views/welcome.html');
	}
}])