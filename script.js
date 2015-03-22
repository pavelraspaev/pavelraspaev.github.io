$(document).ready(function() {
	$('.main-slider').slick({
		infinite: true
	});
	// Всплывающее окно
	$('a#recovery').click( function(event){ 
		event.preventDefault(); 
		$('#overlay').fadeIn(400, 
		 	function(){ 
				$('#recovery_form') 
					.css('display', 'block') 
					.animate({opacity: 1, top: '50%'}, 200); 
		});
	});
	$('#recovery_close, #overlay').click( function(){ 
		$('#recovery_form')
			.animate({opacity: 0, top: '45%'}, 200, 
				function(){ 
					$(this).css('display', 'none'); 
					$('#overlay').fadeOut(400); 
				}
			);
	});
});