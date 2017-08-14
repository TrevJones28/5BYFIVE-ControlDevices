;(function($){

			
	 		// NAVIGATION
	 		//-----------------------------------
			$('.drop_btn').click(function() {
				$('.nav_overlay').slideToggle('fast', function() { 
   			 // Animation complete.
  				});
			});
 			$('.close_btn').click(function() {
				$('.nav_overlay').fadeOut('fast', function() { 
   			 // Animation complete.
  				});
			});
})(jQuery);


