$(document).ready(function() {

$('.overlay').hover(function() {
	$(this).animate({opacity: 1}, 200);
	$(this).parent().css('box-shadow', '2px 2px 10px rgb(165,165,0)');
}, function() {
	$(this).animate({opacity: 0});
	$(this).parent().css('box-shadow', '2px 2px 10px rgba(0,0,0,.5)');
});

$('a[href^="#"]').on('click', function(event) {
	var target = $($(this).attr('href'));

	if(target.length) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop: (target.offset().top -248)
		}, 1000);
	}
});

function inView(element) {
	var windowTop = $(window).scrollTop();
	var windowBottom = $(window).height();

	var headerHeight = $('header').height() + 80;

	var elTop = element.offset().top;
	var elBottom = elTop + element.height();

	return ((elBottom < windowBottom) && ((elTop + headerHeight) > windowTop));
}

var aboutSection = $('#aboutContainer');
var workSection = $('#workList');
var contactSection = $('#contactContainer');
var headerSection = $('header');
var welcomeSection = $('#welcomeContainer');
	
	$(window).scroll(function() {
		console.log($(aboutSection).height());
		console.log($(workSection).height());
		console.log($(contactSection).height());
		var theta = $(this).scrollTop();
		if (theta < 182) {
			$('#spinner').css({ width: theta, height: theta});
		}
		/* NEXT: USE SWITCH CASE INSTEAD & FIGURE OUT WHY ABOUT AND CONTACT ARE ON WHEN AT TOP OF SCREEN! */
		if (!inView(welcomeSection)) {
			$('#logo').animate({opacity: .2});
		} 
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
			$('a[data-target="contact"]').css('color', 'rgb(59, 148, 136)');
		} else {
			$('a[data-target="contact"]').css('color', 'rgb(52, 52, 52)');
		}
	});

});