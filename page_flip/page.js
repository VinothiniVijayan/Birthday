var	bb, $container;

function bookblock() {
	$container = $( '#container' );
	bb = $( '#bb-bookblock' ).bookblock( {
		speed : 800,
		perspective : 2000,
		shadowSides	: 0.8,
		shadowFlip	: 0.4,
		onEndFlip : function(old, page, isLimit) {
			current = page;
		}
	} ),
	$navNext = $( '#bb-nav-next' ),
	$navPrev = $( '#bb-nav-prev' ).hide(),
	$menuItems = $container.find( 'ul.menu-toc > li' ),
	$tblcontents = $( '#tblcontents' ),
	transEndEventNames = {
		'WebkitTransition': 'webkitTransitionEnd',
		'MozTransition': 'transitionend',
		'OTransition': 'oTransitionEnd',
		'msTransition': 'MSTransitionEnd',
		'transition': 'transitionend'
	},
	transEndEventName = transEndEventNames[Modernizr.prefixed('transition')],
	supportTransitions = Modernizr.csstransitions;
}

DOMCheck('.bb-item:nth-child('+listCount+')', bookblock);
DOMCheck('.bb-item:nth-child('+listCount+')', swipeLeft);
DOMCheck('.bb-item:nth-child('+listCount+')', swipeRight);