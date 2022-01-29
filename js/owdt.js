// Custom scripts for Trusted Experts Group

(function($) {
	"use strict";
	var myBody = jQuery('body');
    
	$(function() {
		
		$(myBody).addClass('pageloaded');

                
        
        /* only if home page slider is present */
        if ($('.main-image img').length) {
            
                
            setTimeout(function(){ // wait a little for the slider to load

                setTimeout(function(){ 
                    $('.homepage-slider .slick-active').siblings().find('.caption-mg,.caption-description').removeClass('animated slideInLeft');
                    $('.homepage-slider .slick-active').siblings().find('.caption-title').removeClass('animated fadeInRight');
                    $('.homepage-slider .slick-active').siblings().find('.caption-link').removeClass('animated fadeInLeft');
                }, 300);
                $('.homepage-slider .slick-active').find('.caption-mg,.caption-description').addClass('animated slideInLeft');
                $('.homepage-slider .slick-active').find('.caption-title').addClass('animated fadeInRight');
                $('.homepage-slider .slick-active').find('.caption-link').addClass('animated fadeInLeft');
                $('.homepage-slider .slick-active').find('.main-image').addClass('zome');
                
                $('.img1').addClass('runthis');
                setTimeout(function(){
                    $('.img1').removeClass('runthis');
                }, 12000);
                
                $('.homepage-slider').on('afterChange', function(event, slick, direction){
                    setTimeout(function(){ 
                        $('.homepage-slider .slick-active').siblings().find('.caption-mg,.caption-description').removeClass('animated slideInLeft');
                        $('.homepage-slider .slick-active').siblings().find('.caption-title').removeClass('animated fadeInRight');
                        $('.homepage-slider .slick-active').siblings().find('.caption-link').removeClass('animated fadeInLeft');
                        $('.slider1').removeClass('runthis');
                    }, 300);
                    $('.homepage-slider .slick-active').find('.caption-mg,.caption-description').addClass('animated slideInLeft');
                    $('.homepage-slider .slick-active').find('.caption-title').addClass('animated fadeInRight');
                    $('.homepage-slider .slick-active').find('.caption-link').addClass('animated fadeInLeft');
                    $('.homepage-slider .slick-active').find('.main-image').addClass('zome');
                });
		    }, 300); 
            


			setTimeout(function(){ 
				$('.homepage-slider .slick-dots').addClass('show animated fadeInRight');
			}, 1000);            

            
            /* home page slider */
			$('.homepage-slider').slick({
				autoplay: true,
				autoplaySpeed: 8000,
				arrows: false,
				cssEase: 'ease-in-out',
				lazyLoad: 'progressive',
				dots: true,
				fade: true,
				speed: 500
			}); 
            
        }

		var countSlide = 0; 
		$('.homepage-slider .item').each(function(){ 
			countSlide++; var title = $(this).find('.caption-title h2').text().replace('Experts','');  
			$('.slick-dots li:nth-child(' + countSlide +')').append('<span>' + title + '</span>');  
		});
        
        
		// Reload on orientation change
		window.onorientationchange = function(){
			$('html').css('opacity', '0');
			window.location.reload();
		};	         
        
        
		/* End home page slider */
        
        
        
        
        

		$(document).click(function(e) {
			var homepagesliderpopup = $(".popup-boxes");
			if($(".popup-boxes").css("visibility") == "visible"){
				// if the target of the click isn't the container nor a descendant of the container
				if (!homepagesliderpopup.is(e.target) && homepagesliderpopup.has(e.target).length === 0) {
					$(myBody).removeClass('services'); 
					$(homepagesliderpopup).removeClass('active');
				} 
			}
		});

		if($('.step_2').length){
			$('.homepage-slider-section .link-popup').on('click', function(){
				$(myBody).addClass('services');
			});
			$('.homepage-slider-section .step_2 .closebutton').on('click', function(){
				$(myBody).removeClass('services');
			});
				
		} // end service blocks
		
		$('.homepage-slider-section .link-popup').on('click', function(e){
			e.preventDefault();
			var sliderPopupHref = $(this).attr('href');
			$('.' + sliderPopupHref).siblings().removeClass('active');
			$('.' + sliderPopupHref).addClass('active');
		});
		$('.homepage-slider-section').find('.closebutton').on('click', function(){
			$('.active').removeClass('active');
		});

        
		// Get link inside box and apply to entire container
        $('body').on('click', '.with_link', function () {
            if ($(this).find('a').length) {
                var qqlink = $(this).find('a').attr('href');
                if ($(this).find('a').hasClass('external_link')) {
                    window.open(qqlink);
                } else {
                    window.location = qqlink;
                }
            }
        }); 

        

		/* Multi courses slider */
		$('.multi-courses-section .linkmodule_wrapper > .vc_column-inner > .wpb_wrapper').slick({
			dots: false,
			arrows: true,
			speed: 300,
			slidesToShow: 3,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		});


		/* Popular Publications slider */
		$('.popular-publications-section > .vc_column-inner > .wpb_wrapper').slick({
			dots: false,
			arrows: true,
			speed: 300,
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			variableWidth: true,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		});
                
        

		/* Our instructors slider */
		$('.our-instructors-section .maxwidth > .vc_column-inner > .wpb_wrapper').slick({
			arrows: true,
			dots: false,
			infinite: true
		});


		$('.scroll-links ul li a').on('click', function (e) {
			e.preventDefault()
			var href = $(this).attr('href')
			$('html, body').animate({
				scrollTop: $('.' + href).offset().top - 50
			}, '300')
		});

		$('.divisions-page-content .scroll-links2 ul a.scroll').click(function(e){ 
			e.preventDefault()
			var href = $(this).attr('href')
			var getCurrentClass = $(this).attr('href'); 
			var getCurrentText = $(this).text(); 
			$('.' + getCurrentClass).addClass('vc_active'); 
			$('.' + getCurrentClass).siblings().removeClass('vc_active'); 
			$('.divisions-page-content .vc_tta-tabs-list li').each(function(){  
				var tabText = $(this).find('span').text(); 
				if(tabText == getCurrentText){ 
					$(this).siblings().removeClass('vc_active');
					$(this).addClass('vc_active'); 
				} 
			}) 
			$('html, body').animate({
				scrollTop: $('.' + href).offset().top - 100
			}, '300') 
		});

		$('.our-promise-page-content .scroll-links2 ul a').click(function(e){ 
			e.preventDefault()
			var href = $(this).attr('href')
			var getCurrentClass = $(this).attr('href'); 
			var getCurrentText = $(this).text(); 
			$('.' + getCurrentClass).addClass('vc_active'); 
			$('.' + getCurrentClass).siblings().removeClass('vc_active'); 
			$('.divisions-page-content .vc_tta-tabs-list li').each(function(){  
				var tabText = $(this).find('span').text(); 
				if(tabText == getCurrentText){ 
					$(this).siblings().removeClass('vc_active');
					$(this).addClass('vc_active'); 
				} 
			}) 
			$('html, body').animate({
				scrollTop: $('.' + href).offset().top - 100
			}, '300') 
		});



		/* Payment form click scroll */
		$('.sour-water-stripping .scroll-links1 ul li a').on('click', function (e) {
			e.preventDefault()
			var href = $(this).attr('href')
			$('.'+	href).siblings().removeClass('active')
			$('.'+	href).addClass('active');
			$('html, body').animate({
				scrollTop: $('.' + href).offset().top - 50
			}, '300')
		});
		

        
		// Toggle mobile menu
		$('.hamburger').click(function(){
			if (  $('body').hasClass('hamburger_toggled')  ) {
				$(myBody).removeClass('hamburger_toggled');
				$(myBody).addClass('hamburger_return');
				setTimeout(function(){
					$(myBody).removeClass('hamburger_return');
				},550);
			} else {
				$(myBody).removeClass('hamburger_return');
				$(myBody).addClass('hamburger_toggled');
			}
		});   
		
		// Mega menu js

		$('nav .menu > .menu-item.parent > a').click(function(e){
			e.preventDefault();
			if ($(window).width() < 1023) {
				$(this).parent().toggleClass('mega-menu');
				$(myBody).addClass('open-mega-menu');
			 }
			 else {
				$(this).parent().siblings().removeClass('mega-menu');
				$(this).parent().addClass('mega-menu');
			 }
		});	

		$('.mega .closebutton').click(function(){
			$('.mega-menu').removeClass('mega-menu');
			$(myBody).removeClass('open-mega-menu');
		});	

		$(document).click(function(e) {
			var outsidemenu = $(".mega-menu");
			
			// if the target of the click isn't the container nor a descendant of the container
			if (!outsidemenu.is(e.target) && outsidemenu.has(e.target).length === 0) {
				outsidemenu.removeClass('mega-menu');
				$(myBody).removeClass('open-mega-menu');
			} 
		});
		
		// End mega menu js
        
		// Header Search Toggle
		
		$(document).click(function(e) {
			var outsidesearch = $(".search-form");
			if($(".search-form").css("visibility") == "visible"){
				// if the target of the click isn't the container nor a descendant of the container
				if (!outsidesearch.is(e.target) && outsidesearch.has(e.target).length === 0) {
					//outsideform.css('visibility','hidden');
					$(myBody).removeClass('hide-menu'); 
					$(outsidesearch).removeClass('active');
				} 
			}
		});

		$('.search-bar-top .search-label').click(function(){
			$(this).addClass('active');
			$(myBody).addClass('hide-menu');
			$('.search-bar-top .search-form').addClass('active');
		});


        
		// Start scroll
		var windowheight = $(window).height();
		$(window).scroll(function(event){
			var st = $(this).scrollTop();
			if(st > windowheight){
			$('#scrolltop').addClass('fix');
			}else{
			$('#scrolltop').removeClass('fix');
			}
		}); 

		$('#scrolltop a').click(function(event) {
			event.preventDefault();
			$('body,html').animate({
					scrollTop: 0
				}, 1200);
				return false;
		});
		// End scroll 
        
        
	
        
        
		/* Services slider */
		$('.services-info-slider').slick({
			arrows: true,
			dots: true,
			autoplay: true,
			infinite: true
		});

		var countSlideinfo = -1; 
		$('.services-info-slider .item').each(function(){ 
			countSlideinfo++; var titleService = $(this).find('.services-title').text();  
			$('.services-info-slider .slick-dots li:nth-child(' + countSlideinfo +')').append('<span>' + titleService + '</span>');  
		});

        
        
        
		// Change tab class and display content
		$('.services-section .tabs-nav a').on('click', function (event) {
			event.preventDefault();   
			$('.services-section .tab-active').removeClass('tab-active');
			$(this).parent().addClass('tab-active');
			$('.services-section .tab-content .tab-content-box').hide();
			$($(this).attr('href')).show();
			$('.services-info-slider').slick('refresh');
		});

		$('.services-section .tabs-nav a:first').trigger('click'); // Default
		

		// Change tab class and display content
		$('.tabs-list1 .tabs-nav a').on('click', function (event) {
			event.preventDefault();   
			$('.tabs-list1 .tab-active').removeClass('tab-active');
			$(this).parent().addClass('tab-active');
			$('.tabs-list1 .tab-content .tab-content-box').hide();
			$($(this).attr('href')).show();
		}); 
		$('.tabs-list1 .tabs-nav a:first').trigger('click'); // Default

		// Change tab class and display content
		$('.tabs-list2 .tabs-nav a').on('click', function (event) {
			event.preventDefault();   
			$('.tabs-list2 .tab-active').removeClass('tab-active');
			$(this).parent().addClass('tab-active');
			$('.tabs-list2 .tab-content .tab-content-box').hide();
			$($(this).attr('href')).show();
		}); 
		$('.tabs-list2 .tabs-nav a:first').trigger('click'); // Default
        

		/* Seminar slider */
		// $('.seminar-carousel').on('init', function(event, slick) {
		// 	var i = 0;
		// 	$('.seminar-item').each(function(){
		// 		$(this).addClass('itemCount-'+ i++);
		// 	});
		// });

		$('.seminar-carousel').slick({
			arrows: false,
			dots: true,
			speed: 800,
			autoplay: true,
			infinite: true
		});

		$('.seminar-section .next-button-seminar').click(function(){
			$('.seminar-carousel').slick('slickNext');
		});
		$('.seminar-section .prev-button-seminar').click(function(){
			$('.seminar-carousel').slick('slickPrev');
		});

		$('.seminar-carousel .slick-active').siblings().find('.seminar-detail-content').removeClass('slideleft12');
		$('.seminar-carousel .slick-active').find('.seminar-detail-content').addClass('slideleft12');
		$('.seminar-carousel .slick-active').siblings().find('.slidephoto').removeClass('slideright12');
		$('.seminar-carousel .slick-active').find('.slidephoto').addClass('slideright12');

		$('.seminar-carousel').on('afterChange', function(event, slick, direction){
			$('.seminar-carousel .slick-active').siblings().find('.seminar-detail-content').removeClass('slideleft12');
			$('.seminar-carousel .slick-active').find('.seminar-detail-content').addClass('slideleft12');
			$('.seminar-carousel .slick-active').siblings().find('.slidephoto').removeClass('slideright12');
			$('.seminar-carousel .slick-active').find('.slidephoto').addClass('slideright12');
		});


	
		/* Upcoming Events slider */
		$('.upcoming-events-carousel').slick({
			arrows: true,
			dots: false,
			infinite: true
		});


		/* Testimonial slider */
		$('.testimonial-carousel').slick({
			arrows: false,
			dots: true,
			infinite: false
		});

        
		/* Partner logo slider */
		$('.partner-logo .clients-logo').slick({
			dots: false,
			arrows: true,
			infinite: true,
			autoplay: true,
			speed: 300,
			slidesToShow: 4,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1
					}
				}
			]
		});



	
		// Urgent Click form

		
		$(document).click(function(e) {
			var outsideform3 = $(".pop-up-form");
			if($(".pop-up-form").css("visibility") == "visible"){
				// if the target of the click isn't the container nor a descendant of the container
				if (!outsideform3.is(e.target) && outsideform3.has(e.target).length === 0) {
					//outsideform.css('visibility','hidden');
					$(myBody).removeClass('services'); 
					$(stepPopupform).removeClass('active open');
				} 
			}
		});
		
		if($('.urgent-boxes').length){
			var position = $('.urgent-boxes,.difference-section').position();
			$('.urgent-boxes').on('click', function(){
				$(myBody).addClass('services');
			});
			$('.pop-up-form .closebutton').on('click', function(){
				$(myBody).removeClass('services');
			});
		}

		var stepPopupform = $('.pop-up-form');

		$('.urgent-boxes').on('click', function(e){
			e.preventDefault();
			$(stepPopupform).addClass('active open');
		});
		
		$(stepPopupform).find('.closebutton').on('click', function(){
			setTimeout(function(){
				$(stepPopupform).removeClass('active open');
			});
		});


		// Contact page form js 

		$(document).click(function(e) {
			var outsideform4 = $(".pop-up-form2");
			if($(".pop-up-form2").css("visibility") == "visible"){
				// if the target of the click isn't the container nor a descendant of the container
				if (!outsideform4.is(e.target) && outsideform4.has(e.target).length === 0) {
					$(myBody).removeClass('services'); 
					$(stepPopupform4).removeClass('active open');
				} 
			}
		});
		
		if($('.urgent-boxes').length){
			$('.urgent-boxes').on('click', function(){
				$(myBody).addClass('services');
			});
			$('.pop-up-form2 .closebutton').on('click', function(){
                setTimeout(function(){ 
				    $(myBody).removeClass('services');
				});

			});
		}
		
		var stepPopupform4 = $('.pop-up-form2');
		
		$('.urgent-boxes').on('click', function(e){
			e.preventDefault();
			$(stepPopupform4).addClass('active open');
		});
		
		$(stepPopupform4).find('.closebutton').on('click', function(){
			setTimeout(function(){
				$(stepPopupform4).removeClass('active open');
			});
		});
	

		// Popular Publications click show form popup

		if($('.step_form_2').length){
			$('.popular-publications-section .sub_block').on('click', function(){
				$(myBody).addClass('services');
			});
			$('.step_form_2 .closebutton').on('click', function(){
				$(myBody).removeClass('services');
			});	
		}

		
		/*if($('.popular-publications-section').length){
			var position = $('.popular-publications-section').position();
		}*/
		var steppopularPopupform = $('.popular-pop-up-form_1');
		$('.psd_activate_form_1').on('click', function(e){
			e.preventDefault();
			$(steppopularPopupform).addClass('active open');
		});
		/*if(steppopularPopupform.length){
			$(steppopularPopupform).css('top', position.top);
		}*/
		$(steppopularPopupform).find('.closebutton').on('click', function(){
			setTimeout(function(){
				$(steppopularPopupform).removeClass('active open');
			});
			$('.popular-pop-up-form2_1').removeClass('active open');
		});
		var steppopularPopupformfil = $('.popular-pop-up-form2_1');
		$('.popular-pop-up-form_1 .next-btn').on('click', function(e){
			e.preventDefault();
			$(steppopularPopupformfil).addClass('active open');
		});
		/*	if(steppopularPopupformfil.length){
			$(steppopularPopupformfil).css('top', position.top);
		}*/
		$('.popular-pop-up-form2_1 .closebutton').on('click', function(){
			setTimeout(function(){
				$(steppopularPopupformfil).removeClass('active open');
			});
		});


		$(document).click(function(e) {
			var outsideform1 = $(".popular-pop-up-form_1 .design-review");
			var outsideform2 = $(".popular-pop-up-form2_1  .design-review2");
			if(outsideform2.css("visibility") == "visible" && outsideform1.css("visibility") == "visible"){
				// if the target of the click isn't the container nor a descendant of the container
				if (!outsideform2.is(e.target) && outsideform2.has(e.target).length === 0 && !outsideform1.is(e.target) && outsideform1.has(e.target).length === 0) {
					outsideform2.closest('.popular-pop-up-form2_1').removeClass('active open');
				} 
			} else if(outsideform2.css("visibility") == "hidden" && outsideform1.css("visibility") == "visible"){
				// if the target of the click isn't the container nor a descendant of the container
				if (!outsideform2.is(e.target) && outsideform2.has(e.target).length === 0 && !outsideform1.is(e.target) && outsideform1.has(e.target).length === 0) {
					outsideform1.closest('.popular-pop-up-form_1').removeClass('active open');
					$(myBody).removeClass('services');
				} 
			}
		});

			/*new*/
        // popular-pop-up-form-2
        var steppopularPopupform_2 = $('.popular-pop-up-form_2');
		$('.psd_activate_form_2').on('click', function(e){
			e.preventDefault();
			$(steppopularPopupform_2).addClass('active open');
		});
		$(steppopularPopupform_2).find('.closebutton').on('click', function(){
			setTimeout(function(){
				$(steppopularPopupform_2).removeClass('active open');
			});
			$('.popular-pop-up-form2_2').removeClass('active open');
		});

	    var steppopularPopupformfil_2 = $('.popular-pop-up-form2_2');
		$('.popular-pop-up-form_2 .next-btn').on('click', function(e){
			e.preventDefault();
			$(steppopularPopupformfil_2).addClass('active open');
		});
		
		$('.popular-pop-up-form2_2 .closebutton').on('click', function(){
			setTimeout(function(){
				$(steppopularPopupformfil_2).removeClass('active open');
			});
		});


		$(document).click(function(e) {
			var outsideform1_1 = $(".popular-pop-up-form_2 .design-review");
			var outsideform2_1 = $(".popular-pop-up-form2_2  .design-review2");
			if(outsideform2_1.css("visibility") == "visible" && outsideform1_1.css("visibility") == "visible"){
				// if the target of the click isn't the container nor a descendant of the container
				if (!outsideform2_1.is(e.target) && outsideform2_1.has(e.target).length === 0 && !outsideform1_1.is(e.target) && outsideform1_1.has(e.target).length === 0) {
					outsideform2_1.closest('.popular-pop-up-form2_2').removeClass('active open');
				} 
			} else if(outsideform2_1.css("visibility") == "hidden" && outsideform1_1.css("visibility") == "visible"){
				// if the target of the click isn't the container nor a descendant of the container
				if (!outsideform2_1.is(e.target) && outsideform2_1.has(e.target).length === 0 && !outsideform1_1.is(e.target) && outsideform1_1.has(e.target).length === 0) {
					outsideform1_1.closest('.popular-pop-up-form_2').removeClass('active open');
					$(myBody).removeClass('services');
				} 
			}
		});

		//popular-pop-up-form-3
		 var steppopularPopupform_3 = $('.popular-pop-up-form_3');
		$('.psd_activate_form_3').on('click', function(e){
			e.preventDefault();
			$(steppopularPopupform_3).addClass('active open');
		});

		$(steppopularPopupform_3).find('.closebutton').on('click', function(){
			setTimeout(function(){
				$(steppopularPopupform_3).removeClass('active open');
			});
			$('.popular-pop-up-form2_3').removeClass('active open');
		});

	    var steppopularPopupformfil_3 = $('.popular-pop-up-form2_3');
		$('.popular-pop-up-form_3 .next-btn').on('click', function(e){
			e.preventDefault();
			$(steppopularPopupformfil_3).addClass('active open');
		});

		$('.popular-pop-up-form2_3 .closebutton').on('click', function(){
			setTimeout(function(){
				$(steppopularPopupformfil_3).removeClass('active open');
			});
		});


        $(document).click(function(e) {
			var outsideform1_2 = $(".popular-pop-up-form_3 .design-review");
			var outsideform2_2 = $(".popular-pop-up-form2_3  .design-review2");
			if(outsideform2_2.css("visibility") == "visible" && outsideform1_2.css("visibility") == "visible"){
				// if the target of the click isn't the container nor a descendant of the container
				if (!outsideform2_2.is(e.target) && outsideform2_2.has(e.target).length === 0 && !outsideform1_2.is(e.target) && outsideform1_2.has(e.target).length === 0) {
					outsideform2_2.closest('.popular-pop-up-form2_3').removeClass('active open');
				} 
			} else if(outsideform2_2.css("visibility") == "hidden" && outsideform1_2.css("visibility") == "visible"){
				// if the target of the click isn't the container nor a descendant of the container
				if (!outsideform2_2.is(e.target) && outsideform2_2.has(e.target).length === 0 && !outsideform1_2.is(e.target) && outsideform1_2.has(e.target).length === 0) {
					outsideform1_2.closest('.popular-pop-up-form_3').removeClass('active open');
					$(myBody).removeClass('services');
				} 
			}
		});
		//popular-pop-up-form-4
		 var steppopularPopupform_4 = $('.popular-pop-up-form_4');
		$('.psd_activate_form_4').on('click', function(e){
			e.preventDefault();
			$(steppopularPopupform_4).addClass('active open');
		});

		$(steppopularPopupform_4).find('.closebutton').on('click', function(){
			setTimeout(function(){
				$(steppopularPopupform_4).removeClass('active open');
			});
			$('.popular-pop-up-form2_4').removeClass('active open');
		});

	    var steppopularPopupformfil_4 = $('.popular-pop-up-form2_4');
		$('.popular-pop-up-form_4 .next-btn').on('click', function(e){
			e.preventDefault();
			$(steppopularPopupformfil_4).addClass('active open');
		});

		$('.popular-pop-up-form2_4 .closebutton').on('click', function(){
			setTimeout(function(){
				$(steppopularPopupformfil_4).removeClass('active open');
			});
		});

		$(document).click(function(e) {
			var outsideform1_3 = $(".popular-pop-up-form_4 .design-review");
			var outsideform2_3 = $(".popular-pop-up-form2_4  .design-review2");
			if(outsideform2_3.css("visibility") == "visible" && outsideform1_3.css("visibility") == "visible"){
				// if the target of the click isn't the container nor a descendant of the container
				if (!outsideform2_3.is(e.target) && outsideform2_3.has(e.target).length === 0 && !outsideform1_3.is(e.target) && outsideform1_3.has(e.target).length === 0) {
					outsideform2_3.closest('.popular-pop-up-form2_4').removeClass('active open');
				} 
			} else if(outsideform2_3.css("visibility") == "hidden" && outsideform1_3.css("visibility") == "visible"){
				// if the target of the click isn't the container nor a descendant of the container
				if (!outsideform2_3.is(e.target) && outsideform2_3.has(e.target).length === 0 && !outsideform1_3.is(e.target) && outsideform1_3.has(e.target).length === 0) {
					outsideform1_3.closest('.popular-pop-up-form_4').removeClass('active open');
					$(myBody).removeClass('services');
				} 
			}
		});

		//popular-pop-up-form-5
		 var steppopularPopupform_5 = $('.popular-pop-up-form_5');
		$('.psd_activate_form_5').on('click', function(e){
			e.preventDefault();
			$(steppopularPopupform_5).addClass('active open');
		});

		$(steppopularPopupform_5).find('.closebutton').on('click', function(){
			setTimeout(function(){
				$(steppopularPopupform_5).removeClass('active open');
			});
			$('.popular-pop-up-form2_5').removeClass('active open');
		});

	    var steppopularPopupformfil_5 = $('.popular-pop-up-form2_5');
		$('.popular-pop-up-form_5 .next-btn').on('click', function(e){
			e.preventDefault();
			$(steppopularPopupformfil_5).addClass('active open');
		});

		$('.popular-pop-up-form2_5 .closebutton').on('click', function(){
			setTimeout(function(){
				$(steppopularPopupformfil_5).removeClass('active open');
			});
		});

		$(document).click(function(e) {
			var outsideform1_4 = $(".popular-pop-up-form_5 .design-review");
			var outsideform2_4 = $(".popular-pop-up-form2_5  .design-review2");
			if(outsideform2_4.css("visibility") == "visible" && outsideform1_4.css("visibility") == "visible"){
				// if the target of the click isn't the container nor a descendant of the container
				if (!outsideform2_4.is(e.target) && outsideform2_4.has(e.target).length === 0 && !outsideform1_4.is(e.target) && outsideform1_4.has(e.target).length === 0) {
					outsideform2_4.closest('.popular-pop-up-form2_5').removeClass('active open');
				} 
			} else if(outsideform2_4.css("visibility") == "hidden" && outsideform1_4.css("visibility") == "visible"){
				// if the target of the click isn't the container nor a descendant of the container
				if (!outsideform2_4.is(e.target) && outsideform2_4.has(e.target).length === 0 && !outsideform1_4.is(e.target) && outsideform1_4.has(e.target).length === 0) {
					outsideform1_4.closest('.popular-pop-up-form_5').removeClass('active open');
					$(myBody).removeClass('services');
				} 
			}
		});
	
	    //popular-pop-up-form-6
		 var steppopularPopupform_6 = $('.popular-pop-up-form_6');
		$('.psd_activate_form_6').on('click', function(e){
			e.preventDefault();
			$(steppopularPopupform_6).addClass('active open');
		});

		$(steppopularPopupform_6).find('.closebutton').on('click', function(){
			setTimeout(function(){
				$(steppopularPopupform_6).removeClass('active open');
			});
			$('.popular-pop-up-form2_6').removeClass('active open');
		});

	    var steppopularPopupformfil_6 = $('.popular-pop-up-form2_6');
		$('.popular-pop-up-form_6 .next-btn').on('click', function(e){
			e.preventDefault();
			$(steppopularPopupformfil_6).addClass('active open');
		});

		$('.popular-pop-up-form2_6 .closebutton').on('click', function(){
			setTimeout(function(){
				$(steppopularPopupformfil_6).removeClass('active open');
			});
		});

		$(document).click(function(e) {
			var outsideform1_5 = $(".popular-pop-up-form_6 .design-review");
			var outsideform2_5 = $(".popular-pop-up-form2_6  .design-review2");
			if(outsideform2_5.css("visibility") == "visible" && outsideform1_5.css("visibility") == "visible"){
				// if the target of the click isn't the container nor a descendant of the container
				if (!outsideform2_5.is(e.target) && outsideform2_5.has(e.target).length === 0 && !outsideform1_5.is(e.target) && outsideform1_5.has(e.target).length === 0) {
					outsideform2_5.closest('.popular-pop-up-form2_6').removeClass('active open');
				} 
			} else if(outsideform2_5.css("visibility") == "hidden" && outsideform1_5.css("visibility") == "visible"){
				// if the target of the click isn't the container nor a descendant of the container
				if (!outsideform2_5.is(e.target) && outsideform2_5.has(e.target).length === 0 && !outsideform1_5.is(e.target) && outsideform1_5.has(e.target).length === 0) {
					outsideform1_5.closest('.popular-pop-up-form_6').removeClass('active open');
					$(myBody).removeClass('services');
				} 
			}
		});

		  //popular-pop-up-form-7
		 var steppopularPopupform_7 = $('.popular-pop-up-form_7');
		$('.psd_activate_form_7').on('click', function(e){
			e.preventDefault();
			$(steppopularPopupform_7).addClass('active open');
		});

		$(steppopularPopupform_7).find('.closebutton').on('click', function(){
			setTimeout(function(){
				$(steppopularPopupform_7).removeClass('active open');
			});
			$('.popular-pop-up-form2_7').removeClass('active open');
		});

	    var steppopularPopupformfil_7 = $('.popular-pop-up-form2_7');
		$('.popular-pop-up-form_7 .next-btn').on('click', function(e){
			e.preventDefault();
			$(steppopularPopupformfil_7).addClass('active open');
		});

		$('.popular-pop-up-form2_7 .closebutton').on('click', function(){
			setTimeout(function(){
				$(steppopularPopupformfil_7).removeClass('active open');
			});
		});

		$(document).click(function(e) {
			var outsideform1_6 = $(".popular-pop-up-form_7 .design-review");
			var outsideform2_6 = $(".popular-pop-up-form2_7  .design-review2");
			if(outsideform2_6.css("visibility") == "visible" && outsideform1_6.css("visibility") == "visible"){
				// if the target of the click isn't the container nor a descendant of the container
				if (!outsideform2_6.is(e.target) && outsideform2_6.has(e.target).length === 0 && !outsideform1_6.is(e.target) && outsideform1_6.has(e.target).length === 0) {
					outsideform2_6.closest('.popular-pop-up-form2_7').removeClass('active open');
				} 
			} else if(outsideform2_6.css("visibility") == "hidden" && outsideform1_6.css("visibility") == "visible"){
				// if the target of the click isn't the container nor a descendant of the container
				if (!outsideform2_6.is(e.target) && outsideform2_6.has(e.target).length === 0 && !outsideform1_6.is(e.target) && outsideform1_6.has(e.target).length === 0) {
					outsideform1_6.closest('.popular-pop-up-form_7').removeClass('active open');
					$(myBody).removeClass('services');
				} 
			}
		});
	
	  //popular-pop-up-form-8
		 var steppopularPopupform_8 = $('.popular-pop-up-form_8');
		$('.psd_activate_form_8').on('click', function(e){
			e.preventDefault();
			$(steppopularPopupform_8).addClass('active open');
		});

		$(steppopularPopupform_8).find('.closebutton').on('click', function(){
			setTimeout(function(){
				$(steppopularPopupform_8).removeClass('active open');
			});
			$('.popular-pop-up-form2_8').removeClass('active open');
		});

	    var steppopularPopupformfil_8 = $('.popular-pop-up-form2_8');
		$('.popular-pop-up-form_8 .next-btn').on('click', function(e){
			e.preventDefault();
			$(steppopularPopupformfil_8).addClass('active open');
		});

		$('.popular-pop-up-form2_8 .closebutton').on('click', function(){
			setTimeout(function(){
				$(steppopularPopupformfil_8).removeClass('active open');
			});
		});

		$(document).click(function(e) {
			var outsideform1_7 = $(".popular-pop-up-form_8 .design-review");
			var outsideform2_7 = $(".popular-pop-up-form2_8  .design-review2");
			if(outsideform2_7.css("visibility") == "visible" && outsideform1_7.css("visibility") == "visible"){
				// if the target of the click isn't the container nor a descendant of the container
				if (!outsideform2_7.is(e.target) && outsideform2_7.has(e.target).length === 0 && !outsideform1_7.is(e.target) && outsideform1_7.has(e.target).length === 0) {
					outsideform2_7.closest('.popular-pop-up-form2_8').removeClass('active open');
				} 
			} else if(outsideform2_7.css("visibility") == "hidden" && outsideform1_7.css("visibility") == "visible"){
				// if the target of the click isn't the container nor a descendant of the container
				if (!outsideform2_7.is(e.target) && outsideform2_7.has(e.target).length === 0 && !outsideform1_7.is(e.target) && outsideform1_7.has(e.target).length === 0) {
					outsideform1_7.closest('.popular-pop-up-form_8').removeClass('active open');
					$(myBody).removeClass('services');
				} 
			}
		});


		 //popular-pop-up-form-9
		 var steppopularPopupform_9 = $('.popular-pop-up-form_9');
		$('.psd_activate_form_9').on('click', function(e){
			e.preventDefault();
			$(steppopularPopupform_9).addClass('active open');
		});

		$(steppopularPopupform_9).find('.closebutton').on('click', function(){
			setTimeout(function(){
				$(steppopularPopupform_9).removeClass('active open');
			});
			$('.popular-pop-up-form2_9').removeClass('active open');
		});

	    var steppopularPopupformfil_9 = $('.popular-pop-up-form2_9');
		$('.popular-pop-up-form_9 .next-btn').on('click', function(e){
			e.preventDefault();
			$(steppopularPopupformfil_9).addClass('active open');
		});

		$('.popular-pop-up-form2_9 .closebutton').on('click', function(){
			setTimeout(function(){
				$(steppopularPopupformfil_9).removeClass('active open');
			});
		});
	
       $(document).click(function(e) {
			var outsideform1_8 = $(".popular-pop-up-form_9 .design-review");
			var outsideform2_8 = $(".popular-pop-up-form2_9  .design-review2");
			if(outsideform2_8.css("visibility") == "visible" && outsideform1_8.css("visibility") == "visible"){
				// if the target of the click isn't the container nor a descendant of the container
				if (!outsideform2_8.is(e.target) && outsideform2_8.has(e.target).length === 0 && !outsideform1_8.is(e.target) && outsideform1_8.has(e.target).length === 0) {
					outsideform2_8.closest('.popular-pop-up-form2_9').removeClass('active open');
				} 
			} else if(outsideform2_8.css("visibility") == "hidden" && outsideform1_8.css("visibility") == "visible"){
				// if the target of the click isn't the container nor a descendant of the container
				if (!outsideform2_8.is(e.target) && outsideform2_8.has(e.target).length === 0 && !outsideform1_8.is(e.target) && outsideform1_8.has(e.target).length === 0) {
					outsideform1_8.closest('.popular-pop-up-form_9').removeClass('active open');
					$(myBody).removeClass('services');
				} 
			}
		});

	  


		/*end*/

		// End Popular Publications click show form popup



		// Service menu click services popup open js

		$('#on-site-support-popup .read-btn.btn').click(function(){ 
			localStorage.setItem('popup', 'support'); 
		});
		if(localStorage.popup == 'support') { 
			$('.step_on-site-support').addClass('active open'); 
			$(myBody).addClass('services');
		} 

		$('#analytical-services-popup .read-btn.btn').click(function(){ 
			localStorage.setItem('popup', 'analytical-services'); 
		});
		if(localStorage.popup == 'analytical-services') { 
			$('.step_analytical-services').addClass('active open'); 
			$(myBody).addClass('services');
		} 

		$('#engineering-studies-popup .read-btn.btn').click(function(){ 
			localStorage.setItem('popup', 'engineering-studies'); 
		});
		if(localStorage.popup == 'engineering-studies') { 
			$('.step_engineering-studies').addClass('active open'); 
			$(myBody).addClass('services');
		} 

		$('#technical-training-popup .read-btn.btn').click(function(){ 
			localStorage.setItem('popup', 'technical-training'); 
		});
		if(localStorage.popup == 'technical-training') { 
			$('.step_technical-training').addClass('active open'); 
			$(myBody).addClass('services');
		} 
		
		// End menu click popup
        


		// Service page popup

		if($('.step_2').length){
			$('.services-scroll .sub_block').on('click', function(){
				$(myBody).addClass('services');
				//serviceScroll();
			});
			$('.step_2 .closebutton').on('click', function(){
				$(myBody).removeClass('services');
				localStorage.removeItem('popup');
			});
				
		} // end service blocks

		var stepSupport = $('.step_on-site-support');
		$('.activate_1').on('click', function(e){
			e.preventDefault();
			$(stepSupport).addClass('active open');
		});
		$(stepSupport).find('.closebutton').on('click', function(){
			setTimeout(function(){
				$(stepSupport).removeClass('active open');
			});
			$('.step_3').removeClass('active open');
		});

		var stepServices = $('.step_analytical-services');
		$('.activate_2').on('click', function(e){
			e.preventDefault();
			$(stepServices).addClass('active open');
		});
		$(stepServices).find('.closebutton').on('click', function(){
			setTimeout(function(){
				$(stepServices).removeClass('active open');
			});
			$('.step_3').removeClass('active open');
		});

		var stepStudies = $('.step_engineering-studies');
		$('.activate_3').on('click', function(e){
			e.preventDefault();
			$(stepStudies).addClass('active open');
		});
		$(stepStudies).find('.closebutton').on('click', function(){
			setTimeout(function(){
				$(stepStudies).removeClass('active open');
			});
			$('.step_3').removeClass('active open');
		});

		var stepTraining = $('.step_technical-training');
		$('.activate_4').on('click', function(e){
			e.preventDefault();
			$(stepTraining).addClass('active open');
		});
		$(stepTraining).find('.closebutton').on('click', function(){
			setTimeout(function(){
				$(stepTraining).removeClass('active open');
			});
			$('.step_3').removeClass('active open');
		});

		// now third level...

		// 	On-Site Support	JS
		var third_1_1_1 = $('.third_1_1_1');
		$('.step_on-site-support .amine-boxes .box-item1').on('click', function(e){
			e.preventDefault();
			$(third_1_1_1).addClass('active open');
		});
		$('.third_1_1_1 .closebutton').on('click', function(){
			setTimeout(function(){
				$(third_1_1_1).removeClass('active open');
			});
		});

		var third_1_1_2 = $('.third_1_1_2');
		$('.step_on-site-support .amine-boxes .box-item2').on('click', function(){
			$(third_1_1_2).addClass('active open');
		});
		$('.third_1_1_2 .closebutton').on('click', function(){
			setTimeout(function(){
				$(third_1_1_2).removeClass('active open');
			});
		});

		var third_1_1_3 = $('.third_1_1_3');
		$('.step_on-site-support .amine-boxes .box-item3').on('click', function(){
			$(third_1_1_3).addClass('active open');
		});
		$('.third_1_1_3 .closebutton').on('click', function(){
			setTimeout(function(){
				$(third_1_1_3).removeClass('active open');
			});
		});

		var third_1_1_4 = $('.third_1_1_4');
		$('.step_on-site-support .amine-boxes .box-item4').on('click', function(){
			$(third_1_1_4).addClass('active open');
		});
		$('.third_1_1_4 .closebutton').on('click', function(){
			setTimeout(function(){
				$(third_1_1_4).removeClass('active open');
			});
		});

		var third_1_1_5 = $('.third_1_1_5');
		$('.step_on-site-support .amine-boxes .box-item5').on('click', function(){
			$(third_1_1_5).addClass('active open');
		});
		$('.third_1_1_5 .closebutton').on('click', function(){
			setTimeout(function(){
				$(third_1_1_5).removeClass('active open');
			});
		});

		var third_1_1_6 = $('.third_1_1_6');
		$('.step_on-site-support .amine-boxes .box-item6').on('click', function(){
			$(third_1_1_6).addClass('active open');
		});
		$('.third_1_1_6 .closebutton').on('click', function(){
			setTimeout(function(){
				$(third_1_1_6).removeClass('active open');
			});
		});

		var third_1_2_1 = $('.third_1_2_1');
		$('.step_on-site-support .dehydration-boxes .box-item1').on('click', function(){
			$(third_1_2_1).addClass('active open');
		});
		$('.third_1_2_1 .closebutton').on('click', function(){
			setTimeout(function(){
				$(third_1_2_1).removeClass('active open');
			});
		});

		var third_1_2_2 = $('.third_1_2_2');
		$('.step_on-site-support .dehydration-boxes .box-item2').on('click', function(){
			$(third_1_2_2).addClass('active open');
		});
		$('.third_1_2_2 .closebutton').on('click', function(){;
			setTimeout(function(){
				$(third_1_2_2).removeClass('active open');
			});
		});

		var third_1_2_3 = $('.third_1_2_3');
		$('.step_on-site-support .dehydration-boxes .box-item3').on('click', function(){
			$(third_1_2_3).addClass('active open');
		});
		$('.third_1_2_3 .closebutton').on('click', function(){
			setTimeout(function(){
				$(third_1_2_3).removeClass('active open');
			});
		});
		
		var third_1_3_1 = $('.third_1_3_1');
		$('.step_on-site-support .sulphur-boxes .box-item1').on('click', function(){
			$(third_1_3_1).addClass('active open');
		});
		$('.third_1_3_1 .closebutton').on('click', function(){
			setTimeout(function(){
				$(third_1_3_1).removeClass('active open');
			});
		});

		var third_1_3_2 = $('.third_1_3_2');
		$('.step_on-site-support .sulphur-boxes .box-item2').on('click', function(){
			$(third_1_3_2).addClass('active open');
		});
		$('.third_1_3_2 .closebutton').on('click', function(){
			setTimeout(function(){
				$(third_1_3_2).removeClass('active open');
			});
		});

		var third_1_3_3 = $('.third_1_3_3');
		$('.step_on-site-support .sulphur-boxes .box-item3').on('click', function(){
			$(third_1_3_3).addClass('active open');
		});
		$('.third_1_3_3 .closebutton').on('click', function(){
			setTimeout(function(){
				$(third_1_3_3).removeClass('active open');
			});
		});

		var third_1_3_4 = $('.third_1_3_4');
		$('.step_on-site-support .sulphur-boxes .box-item4').on('click', function(){
			$(third_1_3_4).addClass('active open');
		});
		$('.third_1_3_4 .closebutton').on('click', function(){
			setTimeout(function(){
				$(third_1_3_4).removeClass('active open');
			});
		});

		var third_1_3_5 = $('.third_1_3_5');
		$('.step_on-site-support .sulphur-boxes .box-item5').on('click', function(){
			$(third_1_3_5).addClass('active open');
		});
		$('.third_1_3_5 .closebutton').on('click', function(){
			setTimeout(function(){
				$(third_1_3_5).removeClass('active open');
			});
		});

		var third_1_3_6 = $('.third_1_3_6');
		$('.step_on-site-support .sulphur-boxes .box-item6').on('click', function(){
			$(third_1_3_6).addClass('active open');
		});
		$('.third_1_3_6 .closebutton').on('click', function(){
			setTimeout(function(){
				$(third_1_3_6).removeClass('active open');
			});
		});

		var third_1_3_7 = $('.third_1_3_7');
		$('.step_on-site-support .sulphur-boxes .box-item7').on('click', function(){
			$(third_1_3_7).addClass('active open');
		});
		$('.third_1_3_7 .closebutton').on('click', function(){
			setTimeout(function(){
				$(third_1_3_7).removeClass('active open');
			});
		});

		$(document).click(function(e) {
	        var popupSiteArea = $('.step_on-site-support');
	        var checkVisibilitySite = popupSiteArea.css("visibility");
	        var sitePopup1 = $('.third_1_1_1').css("visibility");
	        var sitePopup2 = $('.third_1_1_2').css("visibility");
	        var sitePopup3 = $('.third_1_1_3').css("visibility");
	        var sitePopup4 = $('.third_1_1_4').css("visibility");
	        var sitePopup5 = $('.third_1_1_5').css("visibility");
	        var sitePopup6 = $('.third_1_1_6').css("visibility");
	        var sitePopup7 = $('.third_1_2_1').css("visibility");
			var sitePopup8 = $('.third_1_2_2').css("visibility");
			var sitePopup9 = $('.third_1_2_3').css("visibility");
			var sitePopup10 = $('.third_1_3_1').css("visibility");
			var sitePopup11 = $('.third_1_3_2').css("visibility");
			var sitePopup12 = $('.third_1_3_3').css("visibility");
			var sitePopup13 = $('.third_1_3_4').css("visibility");
			var sitePopup14 = $('.third_1_3_5').css("visibility");
			var sitePopup15 = $('.third_1_3_6').css("visibility");
			var sitePopup16 = $('.third_1_3_7').css("visibility");	

	        if( checkVisibilitySite == "visible" && sitePopup1 == "visible" || sitePopup2 == "visible" || sitePopup3 == "visible" || sitePopup4 == "visible" || sitePopup5 == "visible" || sitePopup6 == "visible" || sitePopup7 == "visible" || sitePopup8 == "visible" || sitePopup9 == "visible" || sitePopup10 == "visible" || sitePopup11 == "visible" || sitePopup12 == "visible" || sitePopup13 == "visible" || sitePopup14 == "visible" || sitePopup15 == "visible" || sitePopup16 == "visible"){
	         // if the target of the click isn't the container nor a descendant of the container
	         if (!$('.third_1_1_1').is(e.target) && $('.third_1_1_1').has(e.target).length === 0 && !$('.third_1_1_2').is(e.target) && $('.third_1_1_2').has(e.target).length === 0 && !$('.third_1_1_3').is(e.target) && $('.third_1_1_3').has(e.target).length === 0 && !$('.third_1_1_3').is(e.target) && $('.third_1_1_1').has(e.target).length === 0 && !$('.third_1_1_4').is(e.target) && $('.third_1_1_4').has(e.target).length === 0 && !$('.third_1_1_5').is(e.target) && $('.third_1_1_5').has(e.target).length === 0 && !$('.third_1_1_6').is(e.target) && $('.third_1_1_6').has(e.target).length === 0 && !$('.third_1_2_1').is(e.target) && $('.third_1_2_1').has(e.target).length === 0 && !$('.third_1_2_2').is(e.target) && $('.third_1_2_2').has(e.target).length === 0 && !$('.third_1_2_3').is(e.target) && $('.third_1_2_3').has(e.target).length === 0 && !$('.third_1_3_1').is(e.target) && $('.third_1_3_1').has(e.target).length === 0 && !$('.third_1_3_2').is(e.target) && $('.third_1_3_2').has(e.target).length === 0 && !$('.third_1_3_3').is(e.target) && $('.third_1_3_3').has(e.target).length === 0 && !$('.third_1_3_4').is(e.target) && $('.third_1_3_4').has(e.target).length === 0 && !$('.third_1_3_5').is(e.target) && $('.third_1_3_5').has(e.target).length === 0 && !$('.third_1_3_6').is(e.target) && $('.third_1_3_6').has(e.target).length === 0 && !$('.third_1_3_7').is(e.target) && $('.third_1_3_7').has(e.target).length === 0 && !popupSiteArea.is(e.target) && popupSiteArea.has(e.target).length === 0) {
	            $('.third_1_1_1').removeClass('active open');
	            $('.third_1_1_2').removeClass('active open');
	            $('.third_1_1_3').removeClass('active open');
	            $('.third_1_1_4').removeClass('active open');
	            $('.third_1_1_5').removeClass('active open');
	            $('.third_1_1_6').removeClass('active open');
	            $('.third_1_2_1').removeClass('active open');
	            $('.third_1_2_2').removeClass('active open');
	            $('.third_1_2_3').removeClass('active open');
	            $('.third_1_3_1').removeClass('active open');
	            $('.third_1_3_2').removeClass('active open');
	            $('.third_1_3_3').removeClass('active open');
	            $('.third_1_3_4').removeClass('active open');
	            $('.third_1_3_5').removeClass('active open');
	            $('.third_1_3_6').removeClass('active open');
	            $('.third_1_3_7').removeClass('active open');
	         } 
	        } else if(checkVisibilitySite == "visible" && sitePopup1 == "hidden" ){
	        	// if the target of the click isn't the container nor a descendant of the container
		        if (!popupSiteArea.is(e.target) && popupSiteArea.has(e.target).length === 0) {
		            $('.step_on-site-support').removeClass('active open');
		            $('body').removeClass('services');
					localStorage.removeItem('popup');
		        } 
	        }
	    });

		// 	Analytical Services	JS
		var third_2_1_1 = $('.third_2_1_1');
		$('.step_analytical-services .amine-boxes .box-item1').on('click', function(){
			$(third_2_1_1).addClass('active open');
		});
		$('.third_2_1_1 .closebutton').on('click', function(){
			setTimeout(function(){
				$(third_2_1_1).removeClass('active open');
			});
		});

		var third_2_1_2 = $('.third_2_1_2');
		$('.step_analytical-services .amine-boxes .box-item2').on('click', function(){
			$(third_2_1_2).addClass('active open');
		});
		$('.third_2_1_2 .closebutton').on('click', function(){
			setTimeout(function(){
				$(third_2_1_2).removeClass('active open');
			});
		});


		var third_2_1_3 = $('.third_2_1_3');
		$('.step_analytical-services .amine-boxes .box-item3').on('click', function(){
			$(third_2_1_3).addClass('active open');
		});
		$('.third_2_1_3 .closebutton').on('click', function(){
			setTimeout(function(){
				$(third_2_1_3).removeClass('active open');
			});
		});

		var third_2_2_1 = $('.third_2_2_1');
		$('.step_analytical-services .dehydration-boxes .box-item1').on('click', function(){
			$(third_2_2_1).addClass('active open');
		});
		$('.third_2_2_1 .closebutton').on('click', function(){
			setTimeout(function(){
				$(third_2_2_1).removeClass('active open');
			});
		});

		var third_2_2_2 = $('.third_2_2_2');
		$('.step_analytical-services .dehydration-boxes .box-item2').on('click', function(){
			$(third_2_2_2).addClass('active open');
		});
		$('.third_2_2_2 .closebutton').on('click', function(){
			setTimeout(function(){
				$(third_2_2_2).removeClass('active open');
			});
		});

		var third_2_2_3 = $('.third_2_2_3');
		$('.step_analytical-services .dehydration-boxes .box-item3').on('click', function(){
			$(third_2_2_3).addClass('active open');
		});
		$('.third_2_2_3 .closebutton').on('click', function(){
			setTimeout(function(){
				$(third_2_2_3).removeClass('active open close');
			});
		});

		var third_2_3_1 = $('.third_2_3_1');
		$('.step_analytical-services .sulphur-boxes .box-item1').on('click', function(){
			$(third_2_3_1).addClass('active open');
		});
		$('.third_2_3_1 .closebutton').on('click', function(){
			setTimeout(function(){
				$(third_2_3_1).removeClass('active open');
			});
		});

		var third_2_3_2 = $('.third_2_3_2');
		$('.step_analytical-services .sulphur-boxes .box-item2').on('click', function(){
			$(third_2_3_2).addClass('active open');
		});
		$('.third_2_3_2 .closebutton').on('click', function(){
			setTimeout(function(){
				$(third_2_3_2).removeClass('active open');
			});
		});

		var third_2_3_3 = $('.third_2_3_3');
		$('.step_analytical-services .sulphur-boxes .box-item3').on('click', function(){
			$(third_2_3_3).addClass('active open');
		});
		$('.third_2_3_3 .closebutton').on('click', function(){
			setTimeout(function(){
				$(third_2_3_3).removeClass('active open');
			});
		});

		$(document).click(function(e) {
	        var popupservicearea1 = $('.step_analytical-services');
	        var checkVisibilityAS = popupservicearea1.css("visibility");
	        var asPopup1 = $('.third_2_1_1').css("visibility");
	        var asPopup2 = $('.third_2_1_2').css("visibility");
	        var asPopup3 = $('.third_2_1_3').css("visibility");
	        var asPopup4 = $('.third_2_2_1').css("visibility");
	        var asPopup5 = $('.third_2_2_2').css("visibility");
	        var asPopup6 = $('.third_2_2_3').css("visibility");
	        var asPopup7 = $('.third_2_3_1').css("visibility");
			var asPopup8 = $('.third_2_3_2').css("visibility");
			var asPopup9 = $('.third_2_3_3').css("visibility");

	        if( checkVisibilityAS == "visible" && asPopup1 == "visible" || asPopup2 == "visible" || asPopup3 == "visible" || asPopup4 == "visible" || asPopup5 == "visible" || asPopup6 == "visible" || asPopup7 == "visible" || asPopup8 == "visible" || asPopup9 == "visible" ){
	         // if the target of the click isn't the container nor a descendant of the container
	         if (!$('.third_2_1_1').is(e.target) && $('.third_2_1_1').has(e.target).length === 0 && !$('.third_2_1_2').is(e.target) && $('.third_2_1_2').has(e.target).length === 0 && !$('.third_2_1_3').is(e.target) && $('.third_2_1_3').has(e.target).length === 0 && !$('.third_2_2_1').is(e.target) && $('.third_2_2_1').has(e.target).length === 0 && !$('.third_2_2_2').is(e.target) && $('.third_2_2_2').has(e.target).length === 0 && !$('.third_2_2_3').is(e.target) && $('.third_2_2_3').has(e.target).length === 0 && !$('.third_2_3_1').is(e.target) && $('.third_2_3_1').has(e.target).length === 0 && !$('.third_2_3_2').is(e.target) && $('.third_2_3_2').has(e.target).length === 0 &&  !$('.third_2_3_3').is(e.target) && $('.third_2_3_3').has(e.target).length === 0 && !popupservicearea1.is(e.target) && popupservicearea1.has(e.target).length === 0) {
		            $('.third_2_1_1').removeClass('active open');
		            $('.third_2_1_2').removeClass('active open');
		            $('.third_2_1_3').removeClass('active open');
		            $('.third_2_2_1').removeClass('active open');
		            $('.third_2_2_2').removeClass('active open');
		            $('.third_2_2_3').removeClass('active open');
		            $('.third_2_3_1').removeClass('active open');
		            $('.third_2_3_2').removeClass('active open');
		            $('.third_2_3_3').removeClass('active open');
	         } 
	        } else if(checkVisibilityAS == "visible" && asPopup1 == "hidden" ){
	        	// if the target of the click isn't the container nor a descendant of the container
		        if (!popupservicearea1.is(e.target) && popupservicearea1.has(e.target).length === 0) {
		            $('.step_analytical-services').removeClass('active open');
		            $('body').removeClass('services');
					localStorage.removeItem('popup');
		        } 
	        }
	    });

		// 	Engineering Studies	JS
		var third_3_1_1 = $('.third_3_1_1');
		$('.step_engineering-studies .amine-boxes .box-item1').on('click', function(){
			$(third_3_1_1).addClass('active open');
		});
		$('.third_3_1_1 .closebutton').on('click', function(){
			setTimeout(function(){
				$(third_3_1_1).removeClass('active open');
			});
		});

		var third_3_1_2 = $('.third_3_1_2');
		$('.step_engineering-studies .amine-boxes .box-item2').on('click', function(){
			$(third_3_1_2).addClass('active open');
		});
		$('.third_3_1_2 .closebutton').on('click', function(){
			setTimeout(function(){
				$(third_3_1_2).removeClass('active open');
			});
		});

		var third_3_1_3 = $('.third_3_1_3');
		$('.step_engineering-studies .amine-boxes .box-item3').on('click', function(){
			$(third_3_1_3).addClass('active open');
		});
		$('.third_3_1_3 .closebutton').on('click', function(){
			setTimeout(function(){
				$(third_3_1_3).removeClass('active open');
			});
		});

		var third_3_1_4 = $('.third_3_1_4');
		$('.step_engineering-studies .amine-boxes .box-item4').on('click', function(){
			$(third_3_1_4).addClass('active open');
		});
		$('.third_3_1_4 .closebutton').on('click', function(){
			setTimeout(function(){
				$(third_3_1_4).removeClass('active open');
			});
		});

		var third_3_1_5 = $('.third_3_1_5');
		$('.step_engineering-studies .amine-boxes .box-item5').on('click', function(){
			$(third_3_1_5).addClass('active open');
		});
		$('.third_3_1_5 .closebutton').on('click', function(){
			setTimeout(function(){
				$(third_3_1_5).removeClass('active open');
			});
		});
		
		var third_3_1_6 = $('.third_3_1_6');
		$('.step_engineering-studies .amine-boxes .box-item6').on('click', function(){
			$(third_3_1_6).addClass('active open');
		});
		$('.third_3_1_6 .closebutton').on('click', function(){
			setTimeout(function(){
				$(third_3_1_6).removeClass('active open');
			});
		});

		var third_3_2_1 = $('.third_3_2_1');
		$('.step_engineering-studies .dehydration-boxes .box-item1').on('click', function(){
			$(third_3_2_1).addClass('active open');
		});
		$('.third_3_2_1 .closebutton').on('click', function(){
			setTimeout(function(){
				$(third_3_2_1).removeClass('active open');
			});
		});

		var third_3_2_2 = $('.third_3_2_2');
		$('.step_engineering-studies .dehydration-boxes .box-item2').on('click', function(){
			$(third_3_2_2).addClass('active open');
		});
		$('.third_3_2_2 .closebutton').on('click', function(){
			setTimeout(function(){
				$(third_3_2_2).removeClass('active open');
			});
		});

		var third_3_2_3 = $('.third_3_2_3');
		$('.step_engineering-studies .dehydration-boxes .box-item3').on('click', function(){
			$(third_3_2_3).addClass('active open');
		});
		$('.third_3_2_3 .closebutton').on('click', function(){
			setTimeout(function(){
				$(third_3_2_3).removeClass('active open');
			});
		});

		var third_3_2_4 = $('.third_3_2_4');
		$('.step_engineering-studies .dehydration-boxes .box-item4').on('click', function(){
			$(third_3_2_4).addClass('active open');
		});
		$('.third_3_2_4 .closebutton').on('click', function(){
			setTimeout(function(){
				$(third_3_2_4).removeClass('active open');
			});
		});

		var third_3_2_5 = $('.third_3_2_5');
		$('.step_engineering-studies .dehydration-boxes .box-item5').on('click', function(){
			$(third_3_2_5).addClass('active open');
		});
		$('.third_3_2_5 .closebutton').on('click', function(){
			setTimeout(function(){
				$(third_3_2_5).removeClass('active open');
			});
		});

		var third_3_2_6 = $('.third_3_2_6');
		$('.step_engineering-studies .dehydration-boxes .box-item6').on('click', function(){
			$(third_3_2_6).addClass('active open');
		});
		$('.third_3_2_6 .closebutton').on('click', function(){
			setTimeout(function(){
				$(third_3_2_6).removeClass('active open');
			});
		});

		var third_3_3_1 = $('.third_3_3_1');
		$('.step_engineering-studies .sulphur-boxes .box-item1').on('click', function(){
			$(third_3_3_1).addClass('active open');
		});
		$('.third_3_3_1 .closebutton').on('click', function(){
			setTimeout(function(){
				$(third_3_3_1).removeClass('active open');
			});
		});

		var third_3_3_2 = $('.third_3_3_2');
		$('.step_engineering-studies .sulphur-boxes .box-item2').on('click', function(){
			$(third_3_3_2).addClass('active open');
		});
		$('.third_3_3_2 .closebutton').on('click', function(){
			setTimeout(function(){
				$(third_3_3_2).removeClass('active open');
			});
		});

		var third_3_3_3 = $('.third_3_3_3');
		$('.step_engineering-studies .sulphur-boxes .box-item3').on('click', function(){
			$(third_3_3_3).addClass('active open');
		});
		$('.third_3_3_3 .closebutton').on('click', function(){
			setTimeout(function(){
				$(third_3_3_3).removeClass('active open');
			});
		});

		var third_3_3_4 = $('.third_3_3_4');
		$('.step_engineering-studies .sulphur-boxes .box-item4').on('click', function(){
			$(third_3_3_4).addClass('active open');
		});
		$('.third_3_3_4 .closebutton').on('click', function(){
			setTimeout(function(){
				$(third_3_3_4).removeClass('active open');
			});
		});

		var third_3_3_5 = $('.third_3_3_5');
		$('.step_engineering-studies .sulphur-boxes .box-item5').on('click', function(){
			$(third_3_3_5).addClass('active open');
		});
		$('.third_3_3_5 .closebutton').on('click', function(){
			setTimeout(function(){
				$(third_3_3_5).removeClass('active open');
			});
		});

		var third_3_3_6 = $('.third_3_3_6');
		$('.step_engineering-studies .sulphur-boxes .box-item6').on('click', function(){
			$(third_3_3_6).addClass('active open');
		});
		$('.third_3_3_6 .closebutton').on('click', function(){
			setTimeout(function(){
				$(third_3_3_6).removeClass('active open');
			});
		});
        
        $(document).click(function(e) {
	        var popupEngArea1 = $('.step_engineering-studies');
	        var checkVisibilityEN = popupEngArea1.css("visibility");
	        var enPopup1 = $('.third_3_1_1').css("visibility");
	        var enPopup2 = $('.third_3_1_2').css("visibility");
	        var enPopup3 = $('.third_3_1_3').css("visibility");
	        var enPopup4 = $('.third_3_1_4').css("visibility");
	        var enPopup5 = $('.third_3_1_5').css("visibility");
	        var enPopup6 = $('.third_3_1_6').css("visibility");
	        var enPopup7 = $('.third_3_2_1').css("visibility");
			var enPopup8 = $('.third_3_2_2').css("visibility");
			var enPopup9 = $('.third_3_2_3').css("visibility");
			var enPopup10 = $('.third_3_2_4').css("visibility");
			var enPopup11 = $('.third_3_2_5').css("visibility");
			var enPopup12 = $('.third_3_2_6').css("visibility");
			var enPopup13 = $('.third_3_3_1').css("visibility");
			var enPopup14 = $('.third_3_3_2').css("visibility");
			var enPopup15 = $('.third_3_3_3').css("visibility");
			var enPopup16 = $('.third_3_3_4').css("visibility");
			var enPopup17 = $('.third_3_3_5').css("visibility");
			var enPopup18 = $('.third_3_3_6').css("visibility");	

	        if( checkVisibilityEN == "visible" && enPopup1 == "visible" || enPopup2 == "visible" || enPopup3 == "visible" || enPopup4 == "visible" || enPopup5 == "visible" || enPopup6 == "visible" || enPopup7 == "visible" || enPopup8 == "visible" || enPopup9 == "visible" || enPopup10 == "visible" || enPopup11 == "visible" || enPopup12 == "visible" || enPopup13 == "visible" || enPopup14 == "visible" || enPopup15 == "visible" || enPopup16 == "visible" || enPopup17 == "visible" || enPopup18 == "visible"){
	         // if the target of the click isn't the container nor a descendant of the container
	         if (!$('.third_3_1_1').is(e.target) && $('.third_3_1_1').has(e.target).length === 0 && !$('.third_3_1_2').is(e.target) && $('.third_3_1_2').has(e.target).length === 0 && !$('.third_3_1_3').is(e.target) && $('.third_3_1_3').has(e.target).length === 0 && !$('.third_3_1_4').is(e.target) && $('.third_3_1_4').has(e.target).length === 0 && !$('.third_3_1_5').is(e.target) && $('.third_3_1_5').has(e.target).length === 0 && !$('.third_3_1_6').is(e.target) && $('.third_3_1_6').has(e.target).length === 0 && !$('.third_3_2_1').is(e.target) && $('.third_3_2_1').has(e.target).length === 0 && !$('.third_3_2_2').is(e.target) && $('.third_3_2_2').has(e.target).length === 0 && !$('.third_3_2_3').is(e.target) && $('.third_3_2_3').has(e.target).length === 0 && !$('.third_3_2_4').is(e.target) && $('.third_3_2_4').has(e.target).length === 0 && !$('.third_3_2_5').is(e.target) && $('.third_3_2_5').has(e.target).length === 0 && !$('.third_3_2_6').is(e.target) && $('.third_3_2_6').has(e.target).length === 0 && !$('.third_3_3_1').is(e.target) && $('.third_3_3_1').has(e.target).length === 0 && !$('.third_3_3_2').is(e.target) && $('.third_3_3_2').has(e.target).length === 0 && !$('.third_3_3_3').is(e.target) && $('.third_3_3_3').has(e.target).length === 0 && !$('.third_3_3_4').is(e.target) && $('.third_3_3_4').has(e.target).length === 0 && !$('.third_3_3_5').is(e.target) && $('.third_3_3_5').has(e.target).length === 0 && !$('.third_3_3_6').is(e.target) && $('.third_3_3_6').has(e.target).length === 0 && !popupEngArea1.is(e.target) && popupEngArea1.has(e.target).length === 0) {
		            $('.third_3_1_1').removeClass('active open');
		            $('.third_3_1_2').removeClass('active open');
		            $('.third_3_1_3').removeClass('active open');
		            $('.third_3_1_4').removeClass('active open');
		            $('.third_3_1_5').removeClass('active open');
		            $('.third_3_1_6').removeClass('active open');
		            $('.third_3_2_1').removeClass('active open');
		            $('.third_3_2_2').removeClass('active open');
		            $('.third_3_2_3').removeClass('active open');
		            $('.third_3_2_4').removeClass('active open');
		            $('.third_3_2_5').removeClass('active open');
		            $('.third_3_2_6').removeClass('active open');
		            $('.third_3_3_1').removeClass('active open');
		            $('.third_3_3_2').removeClass('active open');
		            $('.third_3_3_3').removeClass('active open');
		            $('.third_3_3_4').removeClass('active open');
		            $('.third_3_3_5').removeClass('active open');
		            $('.third_3_3_6').removeClass('active open');
	         } 
	        } else if(checkVisibilityEN == "visible" && enPopup1 == "hidden" ){
	        	// if the target of the click isn't the container nor a descendant of the container
		        if (!popupEngArea1.is(e.target) && popupEngArea1.has(e.target).length === 0) {
		            $('.step_engineering-studies').removeClass('active open');
		            $('body').removeClass('services');
					localStorage.removeItem('popup');
		        } 
	        }
	    });
		// 	Technical Training	JS
		var third_4_1_1 = $('.third_4_1_1');
		$('.step_technical-training .amine-boxes .box-item1').on('click', function(){
			$(third_4_1_1).addClass('active open');
		});
		$('.third_4_1_1 .closebutton').on('click', function(){
			setTimeout(function(){
				$(third_4_1_1).removeClass('active open');
			});
		});

		var third_4_1_2 = $('.third_4_1_2');
		$('.step_technical-training .amine-boxes .box-item2').on('click', function(){
			$(third_4_1_2).addClass('active open');
		});
		$('.third_4_1_2 .closebutton').on('click', function(){
			setTimeout(function(){
				$(third_4_1_2).removeClass('active open');
			});
		});

		var third_4_1_3 = $('.third_4_1_3');
		$('.step_technical-training .amine-boxes .box-item3').on('click', function(){
			$(third_4_1_3).addClass('active open');
		});
		$('.third_4_1_3 .closebutton').on('click', function(){
			setTimeout(function(){
				$(third_4_1_3).removeClass('active open');
			});
		});

		var third_4_2_1 = $('.third_4_2_1');
		$('.step_technical-training .dehydration-boxes .box-item1').on('click', function(){
			$(third_4_2_1).addClass('active open');
		});
		$('.third_4_2_1 .closebutton').on('click', function(){
			setTimeout(function(){
				$(third_4_2_1).removeClass('active open');
			});
		});

		var third_4_2_2 = $('.third_4_2_2');
		$('.step_technical-training .dehydration-boxes .box-item2').on('click', function(){
			$(third_4_2_2).addClass('active open');
		});
		$('.third_4_2_2 .closebutton').on('click', function(){
			setTimeout(function(){
				$(third_4_2_2).removeClass('active open');
			});
		});

		var third_4_3_1 = $('.third_4_3_1');
		$('.step_technical-training .sulphur-boxes .box-item1').on('click', function(){
			$(third_4_3_1).addClass('active open');
		});
		$('.third_4_3_1 .closebutton').on('click', function(){
			setTimeout(function(){
				$(third_4_3_1).removeClass('active open');
			});
		});

		var third_4_3_2 = $('.third_4_3_2');
		$('.step_technical-training .sulphur-boxes .box-item2').on('click', function(){
			$(third_4_3_2).addClass('active open');
		});
		$('.third_4_3_2 .closebutton').on('click', function(){
			setTimeout(function(){
				$(third_4_3_2).removeClass('active open');
			});
		});

		var third_4_3_3 = $('.third_4_3_3');
		$('.step_technical-training .sulphur-boxes .box-item3').on('click', function(){
			$(third_4_3_3).addClass('active open');
		});
		$('.third_4_3_3 .closebutton').on('click', function(){
			setTimeout(function(){
				$(third_4_3_3).removeClass('active open');
			});
		});

		$(document).click(function(e) {
	        var popupTeachnical = $('.step_technical-training');
	        var checkVisibilityTT = popupTeachnical.css("visibility");
	        var techPopup1 = $('.third_4_1_1').css("visibility");
	        var techPopup2 = $('.third_4_1_2').css("visibility");
	        var techPopup3 = $('.third_4_1_3').css("visibility");
	        var techPopup4 = $('.third_4_2_1').css("visibility");
	        var techPopup5 = $('.third_4_2_2').css("visibility");
	        var techPopup6 = $('.third_4_3_1').css("visibility");
	        var techPopup7 = $('.third_4_3_2').css("visibility");
			var techPopup8 = $('.third_4_3_3').css("visibility");

	        if( checkVisibilityTT == "visible" && techPopup1 == "visible" || techPopup2 == "visible" || techPopup3 == "visible" || techPopup4 == "visible" || techPopup5 == "visible" || techPopup6 == "visible" || techPopup7 == "visible" || techPopup8 == "visible"){
	         // if the target of the click isn't the container nor a descendant of the container
	         if (!$('.third_4_1_1').is(e.target) && $('.third_4_1_1').has(e.target).length === 0 && !$('.third_4_1_2').is(e.target) && $('.third_4_1_2').has(e.target).length === 0 && !$('.third_4_1_3').is(e.target) && $('.third_4_1_3').has(e.target).length === 0 && !$('.third_4_2_1').is(e.target) && $('.third_4_2_1').has(e.target).length === 0 && !$('.third_4_2_2').is(e.target) && $('.third_4_2_2').has(e.target).length === 0 && !$('.third_4_3_1').is(e.target) && $('.third_4_3_1').has(e.target).length === 0 && !$('.third_4_3_2').is(e.target) && $('.third_4_3_2').has(e.target).length === 0 && !$('.third_4_3_3').is(e.target) && $('.third_4_3_3').has(e.target).length === 0 && !popupTeachnical.is(e.target) && popupTeachnical.has(e.target).length === 0) {
	            $('.third_4_1_1').removeClass('active open');
	            $('.third_4_1_2').removeClass('active open');
	            $('.third_4_1_3').removeClass('active open');
	            $('.third_4_2_1').removeClass('active open');
	            $('.third_4_2_2').removeClass('active open');
	            $('.third_4_3_1').removeClass('active open');
	            $('.third_4_3_2').removeClass('active open');
	            $('.third_4_3_3').removeClass('active open');
	         } 
	        } else if(checkVisibilityTT == "visible" && techPopup1 == "hidden" ){
	        	// if the target of the click isn't the container nor a descendant of the container
		        if (!popupTeachnical.is(e.target) && popupTeachnical.has(e.target).length === 0) {
		            $('.step_technical-training').removeClass('active open');
		            $('body').removeClass('services');
					localStorage.removeItem('popup');
		        } 
	        }
	    });



		// Join Our Team js

		if($('.step_2').length){
			$('.join-our-team-page-content .sub_block1').on('click', function(){
				$(myBody).addClass('services');
			});
			$('.step_2 .closebutton').on('click', function(){
				$(myBody).removeClass('services');
			});
				
		} 

		if($('.activate_1,.activate_2,.activate_3,.activate_4').length){
			var position = $('.activate_1,.activate_2,.activate_3,.activate_4').position();
		}
		

		var stepProcess = $('.step_process-engineer');
		$('.activate_1').on('click', function(e){
			e.preventDefault();
			$(stepProcess).addClass('active open');
		});
		/*if(stepProcess.length){
			$(stepProcess).css('top', position.top);
		}*/
		$(stepProcess).find('.closebutton').on('click', function(){
			setTimeout(function(){
				$(stepProcess).removeClass('active open');
			});
			$('.step_3').removeClass('active open');
		});
		$(document).click(function(e) {
			var outsidepopup1 = $(stepProcess);
			if($(stepProcess).css("visibility") == "visible"){
				// if the target of the click isn't the container nor a descendant of the container
				if (!outsidepopup1.is(e.target) && outsidepopup1.has(e.target).length === 0) {
					//outsideform.css('visibility','hidden');
					$(myBody).removeClass('services'); 
					$(stepProcess).removeClass('active open');
				} 
			}
		});

		var stepAnalytical = $('.step_analytical-technologist');
		$('.activate_2').on('click', function(e){
			e.preventDefault();
			$(stepAnalytical).addClass('active open');
		});
		/*if(stepAnalytical.length){
			$(stepAnalytical).css('top', position.top);
		}*/
		$(stepAnalytical).find('.closebutton').on('click', function(){
			setTimeout(function(){
				$(stepAnalytical).removeClass('active open');
			});
			$('.step_3').removeClass('active open');
		});
		$(document).click(function(e) {
			var outsidepopup2 = $(stepAnalytical);
			if($(stepAnalytical).css("visibility") == "visible"){
				// if the target of the click isn't the container nor a descendant of the container
				if (!outsidepopup2.is(e.target) && outsidepopup2.has(e.target).length === 0) {
					//outsideform.css('visibility','hidden');
					$(myBody).removeClass('services'); 
					$(stepAnalytical).removeClass('active open');
				} 
			}
		});

		var stepAnother = $('.step_another-job-title');
		$('.activate_3').on('click', function(e){
			e.preventDefault();
			$(stepAnother).addClass('active open');
		});
		/*	if(stepAnother.length){
			$(stepAnother).css('top', position.top);
		}*/
		$(stepAnother).find('.closebutton').on('click', function(){
			setTimeout(function(){
				$(stepAnother).removeClass('active open');
			});
			$('.step_3').removeClass('active open');
		});
        $(document).click(function(e) {
			var outsidepopup3 = $(stepAnother);
			if($(stepAnother).css("visibility") == "visible"){
				// if the target of the click isn't the container nor a descendant of the container
				if (!outsidepopup3.is(e.target) && outsidepopup3.has(e.target).length === 0) {
					//outsideform.css('visibility','hidden');
					$(myBody).removeClass('services'); 
					$(stepAnother).removeClass('active open');
				} 
			}
		});

		var stepDesired = $('.step_desired-position');
		$('.activate_4').on('click', function(e){
			e.preventDefault();
			$(stepDesired).addClass('active open');
		});
		/*if(stepDesired.length){
			$(stepDesired).css('top', position.top);
		}*/
		$(stepDesired).find('.closebutton').on('click', function(){
			setTimeout(function(){
				$(stepDesired).removeClass('active open');
			});
			$('.step_3').removeClass('active open');
		});
        $(document).click(function(e) {
			var outsidepopup4 = $(stepDesired);
			if($(stepDesired).css("visibility") == "visible"){
				// if the target of the click isn't the container nor a descendant of the container
				if (!outsidepopup4.is(e.target) && outsidepopup4.has(e.target).length === 0) {
					//outsideform.css('visibility','hidden');
					$(myBody).removeClass('services'); 
					$(stepDesired).removeClass('active open');
				} 
			}
		});


		// Product page js

		var stepOxygen = $('.step_oxygen-analyzer');
		$('.activate_1').on('click', function(){
			$(stepOxygen).addClass('active open');
		});
		$(stepOxygen).find('.closebutton').on('click', function(){
			setTimeout(function(){
				$(stepOxygen).removeClass('active open');
			});
			$('.step_3').removeClass('active open');
		});

		$(document).click(function(e) {
			var popupProductOx1 = $(".step_oxygen-analyzer");
			var popupProductOx2 = $(".pop-up-form2");
			if(popupProductOx2.css("visibility") == "visible" && popupProductOx1.css("visibility") == "visible"){
				// if the target of the click isn't the container nor a descendant of the container
				if (!popupProductOx2.is(e.target) && popupProductOx2.has(e.target).length === 0 && !popupProductOx1.is(e.target) && popupProductOx1.has(e.target).length === 0) {
					popupProductOx2.removeClass('active open');
				} 
			} else if(popupProductOx2.css("visibility") == "hidden" && popupProductOx1.css("visibility") == "visible"){
				// if the target of the click isn't the container nor a descendant of the container
				if (!popupProductOx2.is(e.target) && popupProductOx2.has(e.target).length === 0 && !popupProductOx1.is(e.target) && popupProductOx1.has(e.target).length === 0) {
					popupProductOx1.removeClass('active open');
					$(myBody).removeClass('services');
				} 
			}
		});

		var stepFtir = $('.step_ftir');
		$('.activate_2').on('click', function(){
			$(stepFtir).addClass('active open');
		});
		$(stepFtir).find('.closebutton').on('click', function(){
			setTimeout(function(){
				$(stepFtir).removeClass('active open');
			});
			$('.step_3').removeClass('active open');
		});

		$(document).click(function(e) {
			var popupProductFtir = $(".step_ftir");
			var popupProductForm = $(".pop-up-form2");
			if(popupProductForm.css("visibility") == "visible" && popupProductFtir.css("visibility") == "visible"){
				// if the target of the click isn't the container nor a descendant of the container
				if (!popupProductForm.is(e.target) && popupProductForm.has(e.target).length === 0 && !popupProductFtir.is(e.target) && popupProductFtir.has(e.target).length === 0) {
					popupProductForm.removeClass('active open');
				} 
			} else if(popupProductForm.css("visibility") == "hidden" && popupProductFtir.css("visibility") == "visible"){
				// if the target of the click isn't the container nor a descendant of the container
				if (!popupProductForm.is(e.target) && popupProductForm.has(e.target).length === 0 && !popupProductFtir.is(e.target) && popupProductFtir.has(e.target).length === 0) {
					popupProductFtir.removeClass('active open');
					$(myBody).removeClass('services');
				} 
			}
		});

		var stepTechnicalhelp = $('.step_technical-help-desk');
		$('.activate_3').on('click', function(){
			$(stepTechnicalhelp).addClass('active open');
		});
		$(stepTechnicalhelp).find('.closebutton').on('click', function(){
			setTimeout(function(){
				$(stepTechnicalhelp).removeClass('active open');
			});
			$('.step_3').removeClass('active open');
		});

        $(document).click(function(e) {
			var popupTechnical1 = $(".step_technical-help-desk");
			var popupTechnicalForm2 = $(".pop-up-form2");
			if(popupTechnicalForm2.css("visibility") == "visible" && popupTechnical1.css("visibility") == "visible"){
				// if the target of the click isn't the container nor a descendant of the container
				if (!popupTechnicalForm2.is(e.target) && popupTechnicalForm2.has(e.target).length === 0 && !popupTechnical1.is(e.target) && popupTechnical1.has(e.target).length === 0) {
					popupTechnicalForm2.removeClass('active open');
				} 
			} else if(popupTechnicalForm2.css("visibility") == "hidden" && popupTechnical1.css("visibility") == "visible"){
				// if the target of the click isn't the container nor a descendant of the container
				if (!popupTechnicalForm2.is(e.target) && popupTechnicalForm2.has(e.target).length === 0 && !popupTechnical1.is(e.target) && popupTechnical1.has(e.target).length === 0) {
					popupTechnical1.removeClass('active open');
					$(myBody).removeClass('services');
				} 
			}
		});

		var stepFoamtestkit = $('.step_foam-test-kit');
		$('.activate_4').on('click', function(){
			$(stepFoamtestkit).addClass('active open');
		});
		$(stepFoamtestkit).find('.closebutton').on('click', function(){
			setTimeout(function(){
				$(stepFoamtestkit).removeClass('active open');
			});
			$('.step_3').removeClass('active open');
		});
        
         $(document).click(function(e) {
			var popupProductKit1 = $(".step_foam-test-kit");
			var popupKitForm2 = $(".pop-up-form2");
			if(popupKitForm2.css("visibility") == "visible" && popupProductKit1.css("visibility") == "visible"){
				// if the target of the click isn't the container nor a descendant of the container
				if (!popupKitForm2.is(e.target) && popupKitForm2.has(e.target).length === 0 && !popupProductKit1.is(e.target) && popupProductKit1.has(e.target).length === 0) {
					popupKitForm2.removeClass('active open');
				} 
			} else if(popupKitForm2.css("visibility") == "hidden" && popupProductKit1.css("visibility") == "visible"){
				// if the target of the click isn't the container nor a descendant of the container
				if (!popupKitForm2.is(e.target) && popupKitForm2.has(e.target).length === 0 && !popupProductKit1.is(e.target) && popupProductKit1.has(e.target).length === 0) {
					popupProductKit1.removeClass('active open');
					$(myBody).removeClass('services');
				} 
			}
		});

		var stepPopupform2 = $('.pop-up-form2');
		$('.request-Info-btn .btn').on('click', function(e){
			e.preventDefault();
			$(stepPopupform2).addClass('active open');
		});
		$('.pop-up-form2 .closebutton').on('click', function(){
			setTimeout(function(){
				$(stepPopupform2).removeClass('active open');
			});
		});
            


		// End Product page js


         /*Technical resource show more video*/
	    var $ps = $(".experts-network-section .wpb_wrapper").children(".linkmodule");
		$ps.slice(10).hide(); 

		var showVideo = $(".experts-network-section .wpb_wrapper").children(".linkmodule.redirt-linkmodule");
		showVideo.show();

		$(showVideo).click(function(){ 
		    $(".experts-network-section .wpb_wrapper").children(".linkmodule").slice(10).show(); 
		      $(showVideo).hide();

		});
		/* End Technical resource show more video*/

		// join our team form location       
		$('#input_3_7').each(function() {
			$(this).prop('disabled', true);
		});
		$('#input_3_6').change(function() {
			var firstselected = $(this).val();
			if (firstselected) {
			$('#input_3_7').each(function() {
				$(this).prop('disabled', false);
			});
			}
		});


		var $ps = $(".timeline-info .wpb_wrapper").children(".timeline-item");
		$ps.slice(15).hide(); // hide all p-tags after the first one
			// add the read more after the first element
			$ps.eq(14).addClass('learn-count');
			$ps.eq(15).after($('<div class="timeline-item timeline-item-btn"><div class="learn-btn"><a class="btn" href="/">Load More</a></div></div>').click(function(e){
				e.preventDefault();
				// if the read more link is clicked, remove the read more link and show all p-tags
				$(this).remove();
				$ps.show();
				$('.learn-count').removeClass('learn-count')
		})); 


        /*our promise page*/

        $('.leadership-experience-sec .experts-member-section .gs_team').slick({
		    dots: false,
		    arrows: true,
		    autoplay: true,
		    speed: 300,
		    slidesToShow: 4,
		    slidesToScroll: 1,
		    infinite:false,
		    responsive: [
		        {
		            breakpoint: 1279,
		            settings: {
		                slidesToShow: 3,
		                slidesToScroll: 1
		            }
		        },
		        {
		            breakpoint: 1023,
		            settings: {
		                slidesToShow: 2,
		                slidesToScroll: 1
		            }
		        },
		        {
		            breakpoint: 767,
		            settings: {
		                slidesToShow: 1,
		                slidesToScroll: 1
		            }
		        }
		    ]
		});


		// bkMoves() - used to scroll watermark sideways - can use .activator to affect .bkmoves 
		function bkMoves() {
			var activator = $('.activator').offset().top;
			var pageHeight = $(window).height();
			var pageTop = $(window).scrollTop();
			var diff = activator - pageHeight;
			if (  pageTop > diff ) {
				var bkOffsetStart = -60;
				var bkOffset = pageTop - diff;
				var bkOffsetFactor = bkOffset * 0.3;
				var moveBy = bkOffsetStart + bkOffsetFactor + '%';
				$('.bkmoves').css('background-position-x', moveBy);
			}
		}


		// serviceScroll() - scrolls page up or down if .service_blocks is not in the middle of the page
		function serviceScroll() {
			var serviceBlocks = $('.service_blocks').offset().top;
			var pageH = $(window).height();
			var pageT = $(window).scrollTop();
			var svcDiff = serviceBlocks - pageT;
			var pageBot = pageT + pageH;
			var botDiff = pageBot - serviceBlocks;
			var needH = ($('.service_blocks .sub_block').height() + 100) / 2;
			var scrollTarget = serviceBlocks - needH;
			var scrollTargetMobiles = serviceBlocks + 25;
			if (  svcDiff < 10 || botDiff < 500  ) {
				if($(window).width() < 481){
					$('html, body').animate({ scrollTop: scrollTargetMobiles}, 300);
				} else {
					$('html, body').animate({ scrollTop: scrollTarget}, 300);
				}
			}
		}

		// detect when timeline details come into view
		function timeLine() {
			$('.timeline-details').each(function(){
				var activator = $(this).offset().top;
				var pageHeight = $(window).height() - 200;
				var pageTop = $(window).scrollTop();
				var diff = activator - pageHeight;
				if (  pageTop > diff ) {
					$(this).addClass('bringin');
				}			
			});
		}


    /*choose file upload*/
    
	$('.gform_wrapper input[type="file" i]').change(function(e){
		$(this).val();
		var uploaded_text = $('.gform_wrapper input[type="file" i]').val();
		$('.gfield-file label').text(uploaded_text);
		var fileName = e.target.files[0].name;
		$('.gfield-file label').text(fileName);
	});

    /*add promotion code*/
    
	$('.promotion-code-sec .ginput_container').hide();
	$('.promotion-code-sec .gfield_label').click(function(){	
		$('.promotion-code-sec .ginput_container').show();
		$(this).hide();
	});
	$('.promotion-code-sec .button').click(function(){
	    $('.promotion-code-sec input').hide();
	});

	

	$(document).mouseup(function(e){
	    var couponCodeRemove = $('.gf_coupon_name_container a');

	    // if the target of the click isn't the container nor a descendant of the container
	    if (couponCodeRemove.is(e.target)) {
	    	$('.promotion-code-sec').addClass('active');
	        $('.promotion-code-sec .gfield_label').show();
	    }
	    else if($('.promotion-code-sec.active .gfield_label').is(e.target)){
	        $('.promotion-code-sec.active .ginput_container input').show();
	    }
	});

	$('#gf_coupon_button').click(function(){ 

		setTimeout(function(){ 
			if($('.gf_coupon_invalid').length){
				$('.promotion-code-sec .ginput_container input').show();
			}
		}, 2000); 
	});

	// Search Field Validation
		$(".search-submit").click(function(){
		$(".error").hide();
		var hasError = false;
		var searchReg = /^[a-zA-Z0-9-]+$/;
		var searchVal = $(".search-field").val();
		if(searchVal == '') {
			$(".search-field");
			hasError = true;
		}
		if(hasError == true) {return false;}
	});
	// End of Search Field Validation 





	}); // end document ready function    
    
	
})(jQuery);	