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
	var headerHeight = $('header').height() + 20;

	var windowTop = $(window).scrollTop() + headerHeight;
	var windowBottom = $(window).height();

	var elTop = element.offset().top;
	var elBottom = element.height();

	return ((elBottom < windowTop) && (elTop < windowTop));
}

var aboutSection = $('#aboutContainer');
var workSection = $('#workList');
var contactSection = $('#contactContainer');
var headerSection = $('header');
var welcomeSection = $('#welcomeContainer');
	
	$(window).scroll(function() {
		var theta = $(this).scrollTop();
		if (theta < 182) {
			$('#spinner').css({ width: theta, height: theta});
		}
		/* NEXT: FIGURE OUT WHY ABOUT AND CONTACT ARE ON WHEN AT TOP OF SCREEN! */
		if (theta < welcomeSection.height()) {
			$('#logo').hide();
		} else {
			$('#logo').show();
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