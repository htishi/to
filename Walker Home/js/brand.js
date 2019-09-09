/**
 * Created by acer on 2019/9/1.
 */
$(function () {
    
    $('.nav-close').click(function(event) {
        /* Act on the event */

        $('.menu').hide();
        $('.nav-box').show();

    });

    $('.nav-icon').click(function(event) {
        /* Act on the event */
        $('.menu').show();
        $('.nav-box').hide();
    });
    
      $(window).scroll(function () {
          var h=$(window).scrollTop();
          console.log(h);
          if (h>200){
              $('.bott').addClass('animated fadeInLeftBig')

              $('.bott-r').addClass('animated fadeInUpBig')

              $('.bott').show();
              $('.bott-r').show();
          }
          
          
      })



})