function changeHistory(hashPath) {
	if (/(MSIE\ [0-9]{1})/i.test(navigator.userAgent)) {
		const
		path = window.location.pathname.split('#')[0] + hashPath;
		window.location = path;
	} else {
		window.history.pushState(null, null, hashPath);
	}
}

function smoothScrollTo(e) {
	$('#navbar.collapse').removeClass('in');
	const
	me = this;
	const
	target = $(me.hash);
	if (target.length) {
		$('html, body').animate({
			scrollTop: target.offset().top
		}, 600, function() {
			changeHistory(me.hash);
		});
		return false;
	}
}

export function initScroll() {
	$('.nav > li > a, #logo a').click(smoothScrollTo);
	$('#scrollDownArrow').click(smoothScrollTo);
}