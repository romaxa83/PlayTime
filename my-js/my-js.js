//Скрипт дя анимации с заголовком

jQuery(document).ready(function(){
	jQuery('.first').animate({"top" : "25%"},300);
	jQuery('.second').animate({"top" : "30%"},500);
	jQuery('.header p').animate({"opacity" : "1"},1500);
});
	
//вылетающие геймпады  
jQuery(document).ready(function () {	
	if (jQuery(window).width() >= 1240) {
		jQuery('.left').delay(300).animate({"left" : "30%"},300);
		jQuery('.right').delay(300).animate({"right" : "30%"},300);
	} if (jQuery(window).width() >= 880 && jQuery(window).width() < 1240) {
		jQuery('.left').delay(300).animate({"left" : "25%"},300);
		jQuery('.right').delay(300).animate({"right" : "20%"},300);
	    } if(jQuery(window).width() < 880) {
	 	jQuery('.left').delay(300).animate({"left" : "25%"},300);
	 	jQuery('.right').delay(300).animate({"right" : "15%"},300);
	    }
});

//Скрипт для появления нав. меню при скроле  
jQuery(document).ready(function () {
	if(jQuery(window).width() > 768){
    	jQuery(window).scroll(function () {
        	if(jQuery(this).scrollTop()>411){
            	jQuery('#t-nav').css('background-color','rgba(36,41,46,1)');
        	} else {
            	jQuery('#t-nav').css('background-color','rgba(36,41,46,.1)');
        	}
    	});
	} else {jQuery(window).scroll(function () {
        	if(jQuery(this).scrollTop()>250){
            	jQuery('#t-nav').css('background-color','rgba(36,41,46,1)');
        	} else {
            	jQuery('#t-nav').css('background-color','rgba(36,41,46,.1)');
        	}
    	});
	}
});    

// Настройки первого slick-слайдера с играми
jQuery(document).ready(function(){
	jQuery('.slider').slick({
			autoplay : true,
			autoSpeed : 100,
			slidesToShow : 4,
		    slidesToScroll: 3,
		    infinite: true,
		    cssEase : 'ease-in',
		    responsive: [
    		{
      			breakpoint: 960,
      			settings: {
      				autoplay : true,
					autoSpeed : 100,
        			slidesToShow: 3,
        			slidesToScroll: 2,
        			infinite: true,
        			cssEase : 'ease-in'
      			}	
    		},
    		{		
      			breakpoint: 768,
      			settings: {
      				autoplay : true,
					autoSpeed : 100,
        			slidesToShow: 2,
        			slidesToScroll: 2,
        			infinite: true,
        			cssEase : 'ease-in'
      			}
    		},
  		]
	});
});
    		
// Настройки второго slick-слайдера,галерея 
jQuery(document).ready(function(){
	jQuery('.g-slider').slick({
			slidesToShow : 3,
		    slidesToScroll: 1,
		    cssEase : 'ease-in',
		    adaptiveHeight: true,
		    responsive: [
    		{
      			breakpoint: 768,
      			settings: {
        			slidesToShow: 2,
        			slidesToScroll: 1,
        			infinite: true,
        			cssEase : 'ease-in'
      			}	
    		},
    		{		
      			breakpoint: 400,
      			settings: {
        			slidesToShow: 1,
        			slidesToScroll: 1,
        			infinite: true,
        			cssEase : 'ease-in'
      			}
    		},
  		]
	});
});
      				


        						 

      				
		    
					
    		
    
    


			

// jQuery(document).ready(function(){
// 	jQuery('.navbar').scrollspy();
// });

