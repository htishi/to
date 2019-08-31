/*
* @Author: hp
* @Date:   2019-08-16 11:04:37
* @Last Modified by:   hp
* @Last Modified time: 2019-08-16 13:08:45
*/

'use strict';
$(function(){

    // 搜索下拉菜单
       var a=0;
       var n=0;
     $('.top1').click(function(){
         a++;
           if(a>1){
           	a=0;
           }
           	$('.top-sp').css({'transform':'rotate('+a*180+'deg)', 'transition':'0.2s'});
     		$('.sou-box').slideDown(400);
     		if(a==0){
     			$('.sou-box').slideUp(400);
     		}	
     	
     });

        
    $('.sou-box ul li').click(function(event) {
        /* Act on the event */
        var  n=$(this).index();
        var  aa=$('.sou-box ul li').eq(n).html();
        $('.top-l').html(aa);
        $('.top-sp').css({'transform':'rotate(0deg)', 'transition':'0.2s'});
        a=0;
        $('.sou-box').slideUp(400);

    }); 
       var sss=0;
    $('.cant-top li').click(function(){
    	console.log(sss);
    	$(this).addClass('top-li1').siblings('li').removeClass('top-li1')
    })


})