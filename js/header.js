$(document).ready(function () {
    // Фиксированное меню
    var stickyHeaderTop = $('.bgTopMenu').offset().top;

    $(window).scroll(function()
    {
    if( $(window).scrollTop() > stickyHeaderTop ) {
        $('.bgTopMenu').css({position: 'fixed', top: '0px', width: '100%', background: 'black'});
        $('.bgTopInfo').css({background: 'black'});
        if($(window).width() < 1000) {

        } else {  
            $('.topMenu li ul').css({background: '#262626'});
        }
     

    } 
    else {
        $('.bgTopMenu').css({position: 'static', background: 'rgba(0, 0, 0, 0.45)'});
        $('.bgTopInfo').css({background: 'rgba(0, 0, 0, 0.45)'});
        if($(window).width() < 1000) {

        } else {  
            $('.topMenu li ul').css({background: 'rgba(0, 0, 0, 0.45)'});
        }
     

    }
    });
    // Анимация Бордера для меню
    $(function() {
  
        $(".burger-menu").click(function(e) {
           $('.menuBurger').css({display: 'block'});
           $('.bgTopMenu').css({background: 'black'});
        });
        $(".closeBurger").click(function(e) {
            $('.menuBurger').css({display: 'none'});
            $('.bgTopInfo').css({background: 'rgba(0, 0, 0, 0.45)'});
         });
    });

    // внутринее меню бургера
    if($(window).width() < 1000) {
        $('.topMenu li').click(function () { 
            $('.topMenu li ul').css({height: '230px'})
            $('.topMenu li').removeClass('active');
            $(this).addClass('active');
         });
      } else {

      }
});