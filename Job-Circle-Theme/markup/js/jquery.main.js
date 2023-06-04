// page init
jQuery(function(){
	initSlickCarousel();
	initSelect2();
    initFancybox();
	initStickyHeader();
	initMobileNav();
	initResizeEffect();

	jQuery(document).click(function(e) {
		var target = e.target;
		if(jQuery('body').hasClass('nav-active')) {
			if (!jQuery(target).hasClass('nav-opener') && !jQuery(target).parents('.main-nav').length) {
				jQuery('body').removeClass('nav-active');
			}
		}
	})
});

// slick init
function initSlickCarousel() {
		jQuery('.testimonials-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.thumbnail-slider',
		focusOnSelect: true,
		autoplay: true,
	});

	jQuery('.thumbnail-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.testimonials-slider',
		dots: false,
		arrows: false,
		centerMode: true,
		focusOnSelect: true,
		autoplay: true,
		centerPadding: '0',
	});

	jQuery('.gallery-slider').slick({
		slidesToScroll: 1,
		slidesToShow: 3,
		rows: 0,
		arrows: false,
		dots: true,
		focusOnSelect: false,
		infinite: true,
		autoplay: true,
		responsive: [
		    {
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
		    },
		    {
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
		    },
		],
	});

	jQuery('.similar-slider').slick({
		slidesToScroll: 1,
		slidesToShow: 3,
		rows: 0,
		arrows: false,
		dots: true,
		focusOnSelect: false,
		infinite: true,
		autoplay: true,
		responsive: [
		    {
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
		    },
		    {
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
		    },
		],
	});
}

// select2 init
function initSelect2() {
	jQuery('.select2').select2({
		minimumResultsForSearch: -1,
		// placeholder: 'Select an option'
	});
}
  
// Fancybox init
function initFancybox() {
	jQuery('a.lightbox, [data-fancybox]').fancybox();
}

// StickyHeader init
function initStickyHeader() {
	jQuery(window).scroll(function () {
		var scroll = jQuery(window).scrollTop();
		if (scroll >= 1) {
			jQuery("body").addClass("sticky-header");
		} else {
			jQuery("body").removeClass("sticky-header");
		}
	});
}

// MobileNav init
function initMobileNav() {
	jQuery('.nav-opener').click(function (e) {
		e.preventDefault();

		if(jQuery('body').hasClass('nav-active')) {
			jQuery('body').removeClass('nav-active');
		}
		else {
			jQuery('body').addClass('nav-active');
		}
	});

	jQuery('.nav-close').click(function (e) {
		e.preventDefault();

		if(jQuery('body').hasClass('nav-active')) {
			jQuery('body').removeClass('nav-active');
		}
	});
}

// Resiz _Effect function
function initResizeEffect() {
	jQuery(window).resize(function () {
		if(jQuery(window).width() > 991) {
			jQuery('body').removeClass('nav-active');
		}
	});
}