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

     var n=0;
    $('.li2').click(function(){
        n++;
       if (n>8){
           $('.contain-r ul').css('left','0px')
           n=1;
       }
        $('.contain-r ul ').animate({'left': -n*666+'px'},700);
    });

    $('.li1').click(function(){
        n--;
        if (n<0){
            n = 8;
            $('.contain-r ul ').css({'left': -n*666+'px'});
            n=7;
        }
        $('.contain-r ul ').animate({'left': -n*666+'px'},700);
    })


})