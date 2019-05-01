$(document).ready(function() {
    console.log("ready!");

    $('.slider_items').slick({
    	infinite: true,
    	arrows: true,
    	dots: true,
    	fade: true,
    	prevArrow: "<img src='images/left-arrow.png' class='prevArrow'></img>",
    	nextArrow: "<img src='images/right-arrow.png' class='nextArrow'></img>",
        responsive: [
        {
          breakpoint: 600,
          settings: {
            arrows: false,
            slidesToShow: 1,
          }
        }]  
    });

    $('.popular_slides').slick({
        slidesToShow: 2,
        arrows: true,
        infinite: false,
        draggable: false,
        nextArrow: "<i class='fas fa-chevron-right next'></i>",
        prevArrow: "<i class='fas fa-chevron-left prev'></i>",
        responsive: [
        {
          breakpoint: 600,
          settings: {
            arrows: false,
            slidesToShow: 1,
          }
        }]  
    });
    $('.vacation_slides').slick({
        slidesToShow: 2,
        arrows: true,
        infinite: false,
        draggable: false,
        nextArrow: "<i class='fas fa-chevron-right next'></i>",
        prevArrow: "<i class='fas fa-chevron-left prev'></i>",
        responsive: [
        {
          breakpoint: 600,
          settings: {
            arrows: false,
            slidesToShow: 1,
          }
        }] 
        
    });
    $('.top_tours_slides').slick({
        slidesToShow: 2,
        arrows: true,
        infinite: false,
        draggable: false,
        nextArrow: "<i class='fas fa-chevron-right next'></i>",
        prevArrow: "<i class='fas fa-chevron-left prev'></i>",
        responsive: [
        {
          breakpoint: 600,
          settings: {
            arrows: false,
            slidesToShow: 1,
          }
        }]
        
    });
    $('.customer_slides').slick({
        slidesToShow: 1,
        arrows: false,
        infinite: false,
        draggable: false,
        dots: true,
    });




     $( function() {
        $( "#datepicker" ).datepicker({
          changeMonth: true,
          changeYear: true,
          dateFormat: "d M yy",
        });
      } );
    // function show($target){
    // 	if($('$target').hasClass('slick-active')){
    // 		$('hero_text_second').addClass('animated fadeInLeft');
    // 	}
    // };
    
    // show($('.slick-active'));
    // $('.nextArrow').click(function(){
    // 	if($('p').hasClass('animated fadeInLeft')){
    // 		$('p').removeClass('animated fadeInLeft');
    // 	} else {
    // 		$('p').addClass('animated fadeInLeft');
    // 	}
    // });

});