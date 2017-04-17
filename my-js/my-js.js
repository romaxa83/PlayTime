//Скрипт дя анимации с заголовком

jQuery(document).ready(function(){
	jQuery('.first').animate({"top" : "25%"},300);
	jQuery('.second').animate({"top" : "30%"},500);
	jQuery('.header p').animate({"opacity" : "1"},1500);
	jQuery('.left').delay(300).animate({"left" : "32%"},300);
	jQuery('.right').delay(300).animate({"right" : "32%"},300);
});	


jQuery(document).ready(function () {
    jQuery(window).scroll(function () {
        if(jQuery(this).scrollTop()>411){
            jQuery('#t-nav').css('background-color','rgba(36,41,46,1)');
        } else {
            jQuery('#t-nav').css('background-color','rgba(36,41,46,.1)');
        }
    });
});    

        						 

// jQuery(document).ready(function () {
// 	$('.second').animate({"opacity":"1"},1000).delay(500).promise().done(function() {

//     $(this).rotate({

//         angle: 0,

//         animateTo: -45,

//         callback: function () {

//             $(this).animate({"marginTop":"300","width":"150"},500);

//         }

//     });
// });

// });

// Настройки первого slick-слайдера с играми
jQuery(document).ready(function(){
	jQuery('.slider').slick({
			autoplay : true,
			autoSpeed : 100,
			slidesToShow : 4,
		    slidesToScroll: 3,
		    cssEase : 'ease-in',
		    
		});
});


// Настройки второго slick-слайдера,галерея 
jQuery(document).ready(function(){
	jQuery('.g-slider').slick({
		    
			slidesToShow : 3,
		    slidesToScroll: 1,
		    cssEase : 'ease-in',
		    adaptiveHeight: true
		});
});
			

// jQuery(document).ready(function(){
// 	jQuery('.navbar').scrollspy();
// });

