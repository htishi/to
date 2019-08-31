/**
 * Created by acer on 2019/8/12.
 */
$(function(){
    $(window).scroll(function(){
        var h=$(window).scrollTop();
       
        if (h>150){
        $(".nav-login").css('display','block');
        }else {
            $('.nar-box').css('display', 'none');
            $(".nav-login").css('display', 'none');
        }

    });

        $(".dingbu").click(function(){
        	$('html,body').animate({'scrollTop':0},500)
        });



    $('.nav-n').mouseover(function(event) {
    	/* Act on the event */
    	$('.nav-box').css('display','block');
    });
     $('.nav-n').mouseout(function(event) {
        /* Act on the event */
        $('.nav-box').css('display','none');
    });
    $('.nav-box').mouseover(function(event) {
    	/* Act on the event */
    	    $('.nav-box').css('display','block');
    });
    $('.nav-box').mouseout(function(event) {
        /* Act on the event */
            $('.nav-box').css('display','none');
    });
    

    
    

    





   /*轮播*/

     var timer;
     var n=0;
     function add(){
       clearInterval(timer);
     timer=setInterval(function(){
     	n++;
     	if(n>7){
     		$('.uul').css('left','0px');
     		n=1;
     	}  
     	if(n==7){
     			$('.src li').eq(0).addClass('src1').siblings('li').removeClass('src1');
      }
     	$('.uul').animate({'left':-n*1600+'px'}, 1100);
     	$('.src li').eq(n).addClass('src1').siblings('li').removeClass('src1');
     
     },3000);
}
  add();

   $('.banner').mouseover(function(event) {
   	    clearInterval(timer);
   });
     $('.banner').mouseout(function(event) {
   	    add();
   });

    $(".src li").mouseover(function(event) {
    	 n=$(this).index();
    	$('.uul').stop().animate({'left':-n*1600+'px'});
     	$('.src li').eq(n).addClass('src1').siblings('li').removeClass('src1');
    	
    });


     $(".banner-r").click(function(){
    	n++;
        if(n==7){
        	 $('.src li').eq(0).addClass('src1').siblings('li').removeClass('src1');
        }
        if(n>7){
        	$('.uul').css('left','0px');
        	n=1;
        }
       $('.uul').animate({'left':-n*1600+'px'},700);
       $('.src li').eq(n).addClass('src1').siblings('li').removeClass('src1');
    });


     $(".banner-l").click(function(){
    	n--;
        
        if(n<0){
        	n=7;
             $('.uul').css({'left':-n*1600+'px'},700);
            n=6;
        }
       $('.uul').animate({'left':-n*1600+'px'},700);
       $('.src li').eq(n).addClass('src1').siblings('li').removeClass('src1');
    });

      // 搜索下拉菜单
       var a=0;
     $('.sou-p').click(function(){
         a++;
           if(a>1){
           	a=0;
           }
           	$('.ba1').css({'transform':'rotate('+a*180+'deg)', 'transition':'0.2s'});
     		$('.banner-sou-box').slideDown(400);
     		if(a==0){
     			$('.banner-sou-box').slideUp(400);
     		}	
     	
     });


    $('.banner-sou-box ul li').click(function(event) {
        /* Act on the event */
        n=$(this).index();
        var  aa=$('.banner-sou-box ul li').eq(n).html();
        $('.ban1').html(aa);
        $('.ba1').css({'transform':'rotate(0deg)', 'transition':'0.2s'});
        a=0;
        $('.banner-sou-box').slideUp(400);

    });

// 搜索下拉菜单
    var b=0;
    $('.na1').click(function(){
        b++;
        if(b>1){
            b=0;
        }
        $('.sp').css({'transform':'rotate('+b*180+'deg)', 'transition':'0.2s'});
        $('.nar-box').slideDown(400);
        if(b==0){
            $('.nar-box').slideUp(600);
        }

    });

    $('.nar-box ul li').click(function(event) {
        /* Act on the event */
        n=$(this).index();
        var  aa=$('.nar-box ul li').eq(n).html();
        $('.lg1').html(aa);
        $('.sp').css({'transform':'rotate(0deg)', 'transition':'0.2s'});
        b=0;
        $('.nar-box').slideUp(400);


    });


   




    /*视频播放*/
     
     $('.video-play').click(function(){

     	if($('#video').get(0).paused){
     		$('#video').get(0).play();
     		$('.bf3').show();
     		$('.bf2').hide();
     	}else{
     		$('#video').get(0).pause();
     		$('.bf2').show();
     		$('.bf3').hide();

     	}



         	
   
     	
     });







})

