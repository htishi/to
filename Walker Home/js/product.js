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
        if(h>300){
            $('.box-l').addClass('animated fadeInLeft')
            $('.box-r').addClass('animated fadeInRight')
            $('.box-l').show()
            $('.box-r').show()
        }
               if(h>100){
            $('.product-list').show()
        }

        if(h>800){
            $('.product-box').addClass('animated fadeInUp')
            $('.product-box').show()
        }

        
    })



})