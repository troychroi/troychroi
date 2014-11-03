$(document).ready(function() {

// NAVIGATION COLORATION AND SCROLLING FUNCTIONALITIES: 

$('a[href^="#"]').on('click', function(event) {
	var target = $($(this).attr('href'));
	var headerHeight = $('header').height();
		event.preventDefault();
		$('html, body').animate({
			scrollTop: (target.offset().top -280)
		}, 500);
});

function inView(element) {
	var headerHeight = $('header').height() +12;

	var windowTop = $(window).scrollTop() + headerHeight;
	var windowBottom = $(window).height();

	var elTop = element.offset().top;
	var elBottom = element.height();

	return ((elBottom > windowTop - elTop) && (elTop < windowTop));
}

var signUpSection = $('#signUp');
var liveSection = $('#live');
var videosSection = $('#videos');
	
	$(window).scroll(function() { 
		if (inView(signUpSection)) {
			$('a[data-target="signUp"]').css('color', 'rgb(141, 40, 74)');
		} else {
			$('a[data-target="signUp"]').css('color', 'rgb(0, 0, 0)');
		}
		if (inView(liveSection)) {
			$('a[data-target="live"]').css('color', 'rgb(141, 40, 74)');
		} else {
			$('a[data-target="live"]').css('color', 'rgb(0, 0, 0)');
		}
		if (inView(videosSection)) {
			$('a[data-target="videos"]').css('color', 'rgb(141, 40, 74)');
		} else {
			$('a[data-target="videos"]').css('color', 'rgb(0, 0, 0)');
		}
	});

// END OF NAVIGATION COLORATION AND SCROLLING FUNCTIONALITIES

// SIGNUP FORM 

$('#signUp').find('form').on('submit', function(event) {
	event.preventDefault();
	$('#emailInput').val('');
});

// END SIGNUP FORM

// USE LIVE DATA

for (var i = 0; i < dates.length; i++) {
	$('#live').append('<ul class="liveTable"><li class="liveDate"><a href="'+ dates[i].link +'" target="_blank">'+ dates[i].date +'</a></li><li class="liveVenueCityContainer"><li class="liveVenue"><a href="'+ dates[i].link +'" target="_blank">'+ dates[i].venue +'</a></li><li class="liveCity"><a href="'+ dates[i].link +'" target="_blank">'+ dates[i].city +'</a></li></ul>');
};

// END GET AND USE LIVE DATA


// CALCULATE TOP POSITIONS FOR SECTIONS

$('#live').css('top', $(window).height());

$(window).resize(function() {
	$('#live').css('top', $(window).height());
});

// END CALCULATE TOP POSITIONS FOR SECIONS 
});