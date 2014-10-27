$(document).ready(function() {

$('a[href^="#"]').on('click', function(event) {
	var target = $($(this).attr('href'));
	
	if(target.length) {
		event.preventDefault();
		var headerHeight = $('header').height();
		$('html, body').animate({
			scrollTop: (target.offset().top - headerHeight)
		}, 200);
	}
});

function inView(element) {
	var headerHeight = $('header').height() + 2;

	var windowTop = $(window).scrollTop() + headerHeight;
	var windowBottom = $(window).height();

	var elTop = element.offset().top;
	var elBottom = element.height();

	return ((elBottom > windowTop - elTop) && (elTop < windowTop));
}

var aboutSection = $('#aboutContainer');
var workSection = $('#workList');
var contactSection = $('#contactContainer');
var headerSection = $('header');
var welcomeSection = $('#welcomeContainer');
	
	$(window).scroll(function() {
		if (inView(aboutSection)) {
			$('a[data-target="about"]').css('color', 'rgb(59, 148, 136)');
		} else {
			$('a[data-target="about"]').css('color', 'rgb(52, 52, 52)');
		}
		if (inView(workSection)) {
			$('a[data-target="work"]').css('color', 'rgb(59, 148, 136)');
		} else {
			$('a[data-target="work"]').css('color', 'rgb(52, 52, 52)');
		}
		if (inView(contactSection)) {
			$('a[data-target="contact"]').css('color', 'rgb(223, 131, 142)');
			$('#headerRightTop').css({'background': 'rgb(59, 148, 136)', 'border-bottom': '5px solid rgb(245,245,0)'});
		} else {
			$('a[data-target="contact"]').css('color', 'rgb(52, 52, 52)');
			$('#headerRightTop').css({'background': 'rgb(223, 131, 142)', 'border-bottom': '5px solid rgb(0,0,0)'});
		}
	});

});