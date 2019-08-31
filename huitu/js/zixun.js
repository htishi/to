/*
* @Author: hp
* @Date:   2019-08-15 14:06:50
* @Last Modified by:   hp
* @Last Modified time: 2019-08-16 16:21:00
*/

'use strict';
$(function(){
	$(window).scroll(function(event) {
		var h=$(window).scrollTop();
		if(h>300){
			$('.nav-top').css('display', 'block');
		}else{
			$('.nav-top').css('display', 'none');
		}
		
	});

        $(".list-fh").click(function(){
        	$('html,body').animate({'scrollTop':0},500)
        });


        var timer;
        var n=0;
        function autoplay(){
         clearInterval(timer);
        timer=setInterval(function(){
        	n=n+1;
        	if(n>3){
        	   $('.ban').css('left', '0px');
        	   $('.ban2').css('left', '0px');
        		n=1;
        	}
        	$('.ban').animate({'left':-n*660+'px'}, 1000);
        	$('.ban2').animate({'left':-n*660+'px'}, 1000);
        },3000);

      } 
      autoplay();

      $('.banner').mouseover(function(event) {
      	/* Act on the event */
      	     clearInterval(timer);
      });
       $('.banner').mouseout(function(event) {
      	/* Act on the event */
      	       autoplay();
      });
       
       $('.banner-r').click(function(){
       	  n++;
       	  if(n>3){
       	  	$('.ban').css('left', '0px');
        	   $('.ban2').css('left', '0px');
             n=1;
       	  }
       	  
        	$('.ban').animate({'left':-n*660+'px'}, 1000);
        	$('.ban2').animate({'left':-n*660+'px'}, 1000);

       });

       $('.banner-l').click(function(){
       	  n--;
       	  if(n<0){
       	  	n=3;
       	  	 $('.ban').css({'left':-n*660+'px'});
        	$('.ban2').css({'left':-n*660+'px'});
            n=2;
       	  }
        	$('.ban').animate({'left':-n*660+'px'}, 1000);
        	$('.ban2').animate({'left':-n*660+'px'}, 1000);

       });

       var num=0;
       $('.fh2').click(function(){
       	   num++;
       	   if(num>2){
       	   	$('.fh2').css('color', '#aaa');
            num=2;
       	   }
       	   $('.fh1').css('color', '#c82c3b');
           $('.date-ul').animate({'left':-num*550+'px'}, 1000);
       })
       $('.fh1').click(function(){
       	   num--;
       	   if(num<0){
       	   	$('.fh1').css('color', '#aaa');
            num=0;
       	   }
       	   $('.fh2').css('color', '#c82c3b');
           $('.date-ul').animate({'left':-num*550+'px'}, 1000);
       })


        var tmer;
        tmer=setInterval(function(){
        	add();
        } ,3000)
       function add(){
       	 var h=$('.conp li').height();
        	$('.conp').animate({"marginTop": -h+'px'}, 2000,function(){
        		$('.conp li').eq(0).appendTo($('.conp'));
        		$('.conp').css({'marginTop': 0})
        	})
        }


        /*右边栏*/
        $('.guanzhu').mouseover(function(){
          $('.saoma').css('display', 'block');
        })
         $('.guanzhu').mouseout(function(){
          $('.saoma').css('display', 'none');
        })

         

})