/*
* @Author: hp
* @Date:   2019-08-26 10:12:38
* @Last Modified by:   hp
* @Last Modified time: 2019-08-29 13:48:09
*/
$(function(){
    $('#dowebok').fullpage({
        sectionsColor : [],
        anchors:['p1','p2','p3','p4','p5','footer'],
        menu:'#menu',


        afterLoad: function(avchorLink, index){
            if(index!=1){
                $('.shimu ul').stop().animate({'opacity':'1'},500);
            }else{
                $('.shimu ul').stop().animate({'opacity':'0'});
            }
            if (index==3) {
                $('.page3 .cul-box ').addClass('cult');
                $('.page3 .cul-box ').stop().animate({'opacity':'1'},500);

              }
               if (index==4) {
                $('.page4 .cul-box ').addClass('cult');
                $('.page4 .cul-box ').stop().animate({'opacity':'1'},500);

              }
               if (index==5) {
                $('#page5 .cul-box ').addClass('cult');
                $('#page5 .cul-box ').stop().animate({'opacity':'1'},500);

              }


        },
        onLeave:function(index,direction){
          if (index==3) {
                 $('.page3 .cul-box ').removeClass('cult')
                 $('.page3 .cul-box ').stop().animate({'opacity':'0'});
              }
              if (index==4) {
                 $('.page4 .cul-box ').removeClass('cult')
                 $('.page4 .cul-box ').stop().animate({'opacity':'0'});
              }
              if (index==5) {
                 $('#page5 .cul-box ').removeClass('cult')
                 $('#page5 .cul-box ').stop().animate({'opacity':'0'});
              }
        }

});

    $(window).resize(function(){
        autoScrolling();
    });
    
function autoScrolling(){
        var $ww = $(window).width();
        if($ww < 1024){
            $.fn.fullpage.setAutoScrolling(false);
        } else {
            $.fn.fullpage.setAutoScrolling(true);
        }
    }

    autoScrolling();



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

    $('.dow').click(function(){
        // var h=$('.banner').offset().top;
        $('html ,body').animate({'scrollTop':1080},800)

    })





});
     











 


