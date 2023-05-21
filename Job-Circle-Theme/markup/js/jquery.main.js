// page init
jQuery(function(){
	initSlickCarousel();
	initSelect2();
});

// slick init
function initSlickCarousel() {
	jQuery('.slider').slick({
		slidesToScroll: 1,
		slidesToShow: 4,
		rows: 0,
		arrows: false,
		focusOnSelect: true,
		infinite: false,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 2,
				},
			},
		    {
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
		    },
		    {
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 2,
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