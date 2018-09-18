$(function() {

	var date = new Date()
	var options = {
		day: 'numeric',
		month: 'long'
	};

	for(var i = 0; i <= 10; i++){
		date.setDate(date.getDate() + i);
		$('.fr-celendar-block-date').eq(i).text(date.toLocaleString("ru", options));
		$('.fr-celendar-two li a').eq(i).text(date.toLocaleString("ru", options));
		$('#select-date option').eq(i).text(date.toLocaleString("ru", options));
		$('#select-date option').eq(i).text(date.toLocaleString("ru", options));
		date = new Date()
	}
	$('.fw-today span').text($('.active-date').eq(0).text());
	$('.fw-seans-block').each(function() {
		$(this).fadeOut('fast');
	});
	$('.fw-seans-block').each(function() {
		if($(this).attr('data-day') == $('.fw-today span').text().trim()){

			$(this).fadeIn('fast');
		}
	});

	$('.fr-celendar-block').click(function(event) {
		$('.fr-celendar-block').each(function(){
			$(this).removeClass('active-date');
		});
		$(this).addClass('active-date');
		
		

		$('.fw-load').fadeIn().delay(500).fadeOut();
		$('.fw-today span').text($('.active-date').eq(0).text().trim());
		$('.fw-seans-block').each(function() {
			$(this).fadeOut('fast');
		});
		$('.fw-seans-block').each(function() {
			if($(this).attr('data-day') == $('.fw-today span').text().trim()){
	
				$(this).fadeIn('fast');
			}
		});
		
		var sD = $('.active-date').eq(0).text();
		cookie.set('seansDate', sD);
	});

	$('.fr-celendar-two li').click(function(event) {
		$('.fr-celendar-two li').each(function(){
			$(this).removeClass('active-date')
		});
		$(this).addClass('active-date');
		$('.fw-load').fadeIn().delay(500).fadeOut();
		$('.fw-today span').text($('.active-date').eq(1).text());
		$('.fw-seans-block').each(function() {
			$(this).fadeOut('fast');
		});
		$('.fw-seans-block').each(function() {
			if($(this).attr('data-day') == $('.fw-today span').text().trim()){
	
				$(this).fadeIn('fast');
			}
		});

		var sD = $('.active-date').eq(1).text();
		cookie.set('seansDate', sD);
	});

	$('.hamburger').click(function(){
		$(this).toggleClass('is-active');
		$('.fr-header-fixed-bg').fadeToggle();
		$('.fr-header-fixed-menu').slideToggle();
	});
	

	$('.fr-celendar').slick({
	  infinite: false,
	  speed: 300,
	  slidesToShow: 7,
	  slidesToScroll: 1,
	  prevArrow: '<button type="button"><i class="fa fa-arrow-left" aria-hidden="true"></i></button>',
	  nextArrow: '<button type="button"><i class="fa fa-arrow-right" aria-hidden="true"></i></button>',
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 3,
	        infinite: true,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }

	  ]
	});


	$('.unlock').click(function(argument) {
		$(this).toggleClass('selected');
		$('.selected-ticket').remove();
		if($('.selected').length > 0){
			$('.fr-help').fadeOut('fast');
			$('.choose-place h4').fadeOut(10);
			$('.choose-place-description').fadeIn('slov');
			$('.fr-total').fadeIn('slov');
			$('.selected').each(function(){
				var row = $(this).parent().attr("data-row");
				var place = $(this).text();
				$('.choose-place').append("<ul class='selected-ticket'><li>" + row + "</li><li>" + place +"</li><li>500руб.</li></ul>");
				$('.fr-total h4 span').text($('.selected').length * 500);
				var totalSum = $('.fr-total h4 span').text();
				if( totalSum == '500'){
					$('.liqpay-ticket').fadeOut(10);
					$('#liqpayOne').fadeIn(20);
				}
				
				if( totalSum == '1000'){
				 	$('.liqpay-ticket').fadeOut(10);
					$('#liqpayTwo').fadeIn(20);
				}

				if( totalSum == '1500'){
				 	$('.liqpay-ticket').fadeOut(10);
					$('#liqpayThree').fadeIn(20);
				}
				if( totalSum >= '2000'){
				 	$('.liqpay-ticket').fadeOut(10);
					$('#liqpayFour').fadeIn(10);
				}
			});
		}
		else{
			$('.choose-place-description').fadeOut(10);
			$('.choose-place h4').fadeIn('slov');
			$('.fr-total').fadeOut('slov');
			$('.fr-help').fadeIn('slov');	
		}




	})

	$('.rt-choice-blocks').slick({
		centerMode: true,
		draggable: false,
		swipe: false,
	});
	$('.fr-glav-slider').slick({
		dots: true,
	});
	$('.slick-arrow').click(function(event) {
		var zal = $('.slick-current h4').text();
		$('.pt-selected-zal').text(zal);
	});
	
	$('#select-hour').change(function(){
		var selected = $('#select-hour :selected').text()*1000;
		switch(selected){
			case 1000:
				selected = 1200;
				$('.liqpay-rent').fadeOut(5);
				$('#RentOne').fadeIn(20);
				break;
			case 2000:
				selected = 2100;
				$('.liqpay-rent').fadeOut(5);
				$('#RentTwo').fadeIn(20);
				break;
			case 3000: 
				selected = 3000;
				$('.liqpay-rent').fadeOut(5);
				$('#RentThree').fadeIn(20);
				break;
			case 4000:
				selected = 3900;
				$('.liqpay-rent').fadeOut(5);
				$('#RentFour').fadeIn(20);
				break;
			case 5000:
				selected = 4800;
				$('.liqpay-rent').fadeOut(5);
				$('#RentFive').fadeIn(20);
				break;
			case 6000:
				selected = 5700;
				$('.liqpay-rent').fadeOut(5);
				$('#RentSix').fadeIn(20);
				break;
			case 7000:
				selected = 6600;
				$('.liqpay-rent').fadeOut(5);
				$('#RentSeven').fadeIn(20);
				break;
			case 8000:
				selected = 7500;
				$('.liqpay-rent').fadeOut(5);
				$('#RentEight').fadeIn(20);
				break;
			default:
    			selected = 2100;
    			$('.liqpay-rent').fadeOut(5);
				$('#RentOne').fadeIn(20);
		}
		$('.fr-price span').text(selected)
	});



	$('.ab-emblems-block-q').delay(1000).each(function(){//пройдет по всем элементам класса count
						$(this).prop('Counter', 0).animate({ //Изминяет число от 0 до его значения
							Counter: $(this).text()
						},{
							duration: 4000,
							easing: 'swing',
							step:function(now) {
								$(this).text(Math.ceil(now));
							}
						});
	});
	$('.fw-seans-block-content-time a').click(function(){
		cookie.set('times', $(this).text());

		timeSeans = cookie.get('times');
		
	});
	$(document).ready(function(){
		$('.liqpay-rent').fadeOut(5);
		$('#RentOne').fadeIn(20);
		$('.this-seans-h5 span').text(cookie.get('times'));
		$('.this-seans-h5date span').text(cookie.get('seansDate'));
		if($('.this-seans-h5date span').text() == ''){
			var dateTwo = new Date();
			dateTwo.setDate(dateTwo.getDate() + 1);
			$('.this-seans-h5date span').text(dateTwo.toLocaleString("ru", options));

		}
	});

	$('.gl-btn').mouseover(function(){
		$('.fr-glav-slide').css('filter', 'blur(5px')
	})

	$('.gl-btn').mouseout(function(){
		$('.fr-glav-slide').css('filter', 'none')
	})

//end code
});
