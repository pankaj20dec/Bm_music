var wheight, wwidth, hheight,fheight,mheight;
jQuery(document).ready(function(){
	size();
		 if(jQuery(window).width() < 400){
			 jQuery('.slider1').bxSlider({
			slideWidth: 360,
			minSlides: 2,
			maxSlides: 2,
			slideMargin: 40
		  });
		 }
	 else if(jQuery(window).width() > 400 < 767){
		jQuery('.slider1').bxSlider({
		slideWidth: 360,
		minSlides: 2,
		maxSlides: 2,
		slideMargin: 70
	  });
	}else{
		 jQuery('.slider1').bxSlider({
		slideWidth: 360,
		minSlides: 3,
		maxSlides: 3,
		slideMargin: 70
	  });
	}
	 jQuery('.slider3').bxSlider({
		slideWidth: 360,
		minSlides: 3,
		maxSlides: 3,
		slideMargin: 70
	  });
	 
	 jQuery('.scroll-top').click(function(){
		jQuery('html,body').animate({
			scrollTop: 0
		},600)
	 });
	 jQuery('.scroll-down a').click(function(e){
		e.preventDefault();
		var href = jQuery(this).attr("href");
		var $href = jQuery(href).offset().top;
		jQuery('html,body').animate({
			scrollTop: $href
		},600) 
	 });
	jQuery('ul li a').click(function(e){
		//e.preventDefault();
		jQuery('#menu-container').fadeOut();
		var url = jQuery(this).attr("href");
		var indexed = url.indexOf("#");
		var hashTag = url.substr(url.indexOf("#"));
		console.log(indexed);
		if(indexed > -1){
			e.preventDefault();
			if(jQuery(hashTag).length){
			var $href = jQuery(hashTag).offset().top;
			jQuery('html,body').animate({
				scrollTop: $href
			},600)
			}else{
				window.location.href = url;
			}
		}
	});	
	jQuery('#header').scrollToFixed();	
	
	jQuery('.taxonomy-description').readmore({
		moreLink: '<a href="#">Expand</a>',
	});
	
	/************ Mobile menu  ***************/
	jQuery('.mobile-menu a').click(function(){
		jQuery('#menu-container').fadeIn(600);
	});
	jQuery('.close').click(function(){
		jQuery('#menu-container').fadeOut(600);
	});
	
});

jQuery(window).scroll(function(){
	 if(jQuery(window).scrollTop() > 100){
		 jQuery('.scroll-top').fadeIn(); 
	 }else{
		  jQuery('.scroll-top').fadeOut();
	 }
 });
jQuery(window).load(function(){
	size();
	if(jQuery(window).width() < 767){  
		jQuery('.slider2').bxSlider({
		slideWidth: 360,
		minSlides: 1,
		maxSlides: 1,
		slideMargin: 70
	  });
	  }else{
		jQuery('.slider2').bxSlider({
		slideWidth: 360,
		minSlides: 3,
		maxSlides: 3,
		slideMargin: 70
	  });  
	  }
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