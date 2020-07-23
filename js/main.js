 var myNav = document.getElementById('myNav');
 window.onscroll = function() {
     "use strict";
     if (document.body.scrollTop >= 350 || document.documentElement.scrollTop >= 350) {
         myNav.classList.add("nav-colored");
         myNav.classList.remove("nav-transparent");
     } else {
         myNav.classList.add("nav-transparent");
         myNav.classList.remove("nav-colored");
     }
 };

 /* if the screen height is below 550 and you hover over the bar icon the navbar will get background if it was transparent */
 myNav.addEventListener('mousemove', function() {
     if (document.body.scrollTop < 350 && document.documentElement.scrollTop < 350) {
         myNav.classList.remove('nav-transparent');
         myNav.classList.add("nav-colored");
     }
 });

 /* if the screen height is below 550 and you hover out,  the navbar will get back to transparent */
 myNav.addEventListener('mouseout', function() {
     if (document.body.scrollTop < 350 && document.documentElement.scrollTop < 350) {
         myNav.classList.remove('nav-colored');
         myNav.classList.add("nav-transparent");

     }
 });

 // loading screen

 $(window).on("load", function() {
     $(".loading__title , .spinner-container").fadeOut(2500);
     $(".loading-screen").fadeOut(400, function() {
         $("body").css("overflow", "auto");
         $(this).remove();
     });
 });