var wheight, wwidth, hheight,fheight,mheight;
jQuery(document).ready(function(){
	size();
	  jQuery('.slider1').bxSlider({
		slideWidth: 360,
		minSlides: 3,
		maxSlides: 3,
		slideMargin: 70
	  });
	 jQuery(window).scroll(function(){
		 if(jQuery(window).scrollTop() > 100){
			 jQuery('.scroll-top').fadeIn(); 
		 }else{
			  jQuery('.scroll-top').fadeOut();
		 }
	 });
	 jQuery('.scroll-top').click(function(){
		jQuery('html,body').animate({
			scrollTop: 0
		},600)
	 });
	 
	jQuery('#header nav ul li a').click(function(e){
		e.preventDefault();
		var href = jQuery(this).attr("href");
		var $href = jQuery(href).offset().top;
		jQuery('html,body').animate({
			scrollTop: $href
		},600)
	});	
	jQuery('#header').scrollToFixed();	
	
	jQuery('.taxonomy-description').readmore({
		moreLink: '<a href="#">Expand</a>',
	});
	
});
jQuery(window).load(function(){
	size();
	 jQuery('.slider2').bxSlider({
		slideWidth: 360,
		minSlides: 3,
		maxSlides: 3,
		slideMargin: 70
	  });
});
jQuery(window).resize(function(){
	size();
});

function size(){
	hheight = jQuery('#header').outerHeight();
	fheight = jQuery('#footer').outerHeight();
	wheight = jQuery(window).height();
	theight = jQuery(window).height() - 85;
	jQuery('.wheight').css({'height':wheight});
	jQuery('.theight').css({'height':theight});
	jQuery('.cheight').css({'height':wheight - fheight});
	jQuery('.mheight').css({'min-height':wheight});
}