$(document).ready(function() {
	$('.menu').mouseenter(function() {
		$('this').fadeTo('fast', 1)
	});
	$('.menu').mouseleave(function() {
		$('this').fadeTo('fast', 0.5)
	});
});