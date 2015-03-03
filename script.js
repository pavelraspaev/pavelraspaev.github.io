$(document).ready(function() {
	$('li').mouseenter(function() {
		$('this').fadeTo('fast', 1)
	});
	$('li').mouseleave(function() {
		$('this').fadeTo('fast', 0.5)
	});
});