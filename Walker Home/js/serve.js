/*
* @Author: hp
* @Date:   2019-09-02 19:49:05
* @Last Modified by:   hp
* @Last Modified time: 2019-09-02 19:49:41
*/

'use strict';
$(function(){


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

	
})