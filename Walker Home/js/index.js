 /*
* @Author: hp
* @Date:   2019-08-20 20:21:15
* @Last Modified by:   hp
* @Last Modified time: 2019-08-31 17:33:32
*/

'use strict';
$(function(){


     var n=0;
     var timer;
     timer=setInterval(function(){
     	n++;
     
     	if(n>6){
     		n=0;
     	}
		    
          // $('.ban-ul li').eq(n).css({'display':'block'}).siblings('li').css({'display':'none'});
          
         
          $('.ban-ul li').eq(n).animate({'opacity':1}, 1500).siblings('li').animate({'opacity':'0'});
          // $('.ban-ul li').eq(n).show().siblings('li').hide();
          
          $('.ban-t li').eq(n).animate({'opacity':'1'}, 1500).siblings('li').animate({'opacity':'0'});

           $('.ban-ul li').eq(n).addClass('donghua-b').siblings('li').removeClass('donghua-b');
          	
           $('.ban-t li').eq(n).addClass('donghua').siblings('li').removeClass('donghua')
          	
            $('.text-bottom p').html(n+1+"/7");

             	         	
     },5000)


        $('.bot-r').click(function(event) {
                	/* Act on the event */
                	 n++;

                	 if(n>6){
                	 	n=0;
                	 }

                	$('.ban-ul li').eq(n).animate({'opacity':'1'}, 1500).siblings('li').animate({'opacity':'0'})
          
          			$('.ban-t li').eq(n).animate({'opacity':'1'}, 1500).siblings('li').animate({'opacity':'0'}
          	)
           			$('.ban-ul li').eq(n).addClass('donghua-b').siblings('li').removeClass('donghua-b')
          	
           			$('.ban-t li').eq(n).addClass('donghua').siblings('li').removeClass('donghua')
          	

                	 $('.text-bottom p').html(n+1+"/7");
                });
                $('.bot-l').click(function(event) {
                	/* Act on the event */
                	 n--;
                	 if(n<0){
                	 	n=6;
                	 }

                	 $('.ban-ul li').eq(n).animate({'opacity':'1'}, 1500).siblings('li').animate({'opacity':'0'})
          
          			$('.ban-t li').eq(n).animate({'opacity':'1'}, 1500).siblings('li').animate({'opacity':'0'}
          	          )
           			$('.ban-ul li').eq(n).addClass('donghua-b').siblings('li').removeClass('donghua-b')
          	
           			$('.ban-t li').eq(n).addClass('donghua').siblings('li').removeClass('donghua')
          	

                	 $('.text-bottom p').html(n+1+"/7");
                });
    

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


                    
               $(window).scroll(function(event) {

                    var h=$(window).scrollTop();
                    console.log(h)
                   
                    if(h>150){
                    $('.center-img ul li').eq(0).addClass('animated fadeInUp');
                    $('.center-img ul li').eq(1).addClass('animated fadeInUp');
                    $('.center-img ul li').eq(2).addClass('animated fadeInUp');
                    }
                    if(h>1200){
                    	$('.product-img').show();
                    	$('.product-img').addClass('animated rollIn')
 
                    }

                    if(h>1700){
                    	$('.img-an').show();
                    	$('.img-an').addClass('animated fadeInLeft')
                      
                        
                        $('.brand-text').show(1000);
                    	$('.brand-text').addClass('animated fadeInRightBig')
                       
                    	
                    }
               });



 })


