$(document).ready(function() {
	$('div').mouseenter(function() {
		$('div').fadeTo('fast', 0.5)
	});
	$('div').mouseleave(function() {
		$('div').fadeOut('fast', 0.5)
	});
});