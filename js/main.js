      // automatic and manuel

      var slideIndex = 1;

      var myTimer;

      var slideshowContainer;

      window.addEventListener("load", function() {
          showSlides(slideIndex);
          myTimer = setInterval(function() {
              plusSlides(1);
          }, 4000);

          //COMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
          slideshowContainer = document.getElementsByClassName("slideshow-inner")[0];

          //UNCOMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
          slideshowContainer = document.getElementsByClassName(
              "slideshow-container"
          )[0];

          slideshowContainer.addEventListener("mouseenter", pause);
          slideshowContainer.addEventListener("mouseleave", resume);
      });

      // NEXT AND PREVIOUS CONTROL
      function plusSlides(n) {
          clearInterval(myTimer);
          if (n < 0) {
              showSlides((slideIndex -= 1));
          } else {
              showSlides((slideIndex += 1));
          }

          // COMMENT OUT THE LINES BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME

          if (n === -1) {
              myTimer = setInterval(function() {
                  plusSlides(n + 2);
              }, 4000);
          } else {
              myTimer = setInterval(function() {
                  plusSlides(n + 1);
              }, 4000);
          }
      }

      //Controls the current slide and resets interval if needed
      function currentSlide(n) {
          clearInterval(myTimer);
          myTimer = setInterval(function() {
              plusSlides(n + 1);
          }, 4000);
          showSlides((slideIndex = n));
      }

      function showSlides(n) {
          var i;
          var slides = document.getElementsByClassName("mySlides");
          var dots = document.getElementsByClassName("dot");
          if (n > slides.length) {
              slideIndex = 1;
          }
          if (n < 1) {
              slideIndex = slides.length;
          }
          for (i = 0; i < slides.length; i++) {
              slides[i].style.display = "none";
          }
          for (i = 0; i < dots.length; i++) {
              dots[i].className = dots[i].className.replace(" active", "");
          }
          slides[slideIndex - 1].style.display = "block";
          dots[slideIndex - 1].className += " active";
      }

      pause = () => {
          clearInterval(myTimer);
      };

      resume = () => {
          clearInterval(myTimer);
          myTimer = setInterval(function() {
              plusSlides(slideIndex);
          }, 4000);
      };

      // document.getElementById("navbar").style.backgroundColor = "#444444";
      // document.getElementById("navbar").style.backgroundColor = "#44444473";

      // navbar responsive function
      function myFunction() {
          var x = document.getElementById("navbar-not-responsive");

          if (x.className === "navbar-list") {
              x.className += " responsive";
              document.getElementById("my-iconX").style.display = "block";
              document.getElementById("my-icon").style.display = "none";

          } else {
              x.className = "navbar-list";
              document.getElementById("my-iconX").style.display = "none";
              document.getElementById("my-icon").style.display = "block";
          }
      }

      var myNav = document.getElementById('navbar');
      window.onscroll = function() {
          "use strict";
          if (document.body.scrollTop >= 550 || document.documentElement.scrollTop >= 550) {
              myNav.classList.add("nav-colored");
              myNav.classList.remove("nav-transparent");
          } else {
              myNav.classList.add("nav-transparent");
              myNav.classList.remove("nav-colored");
          }
      };

      /*
       * 
       * Event delegation is a bit cleaner imho 
       * and requires less horsepower if you've got a lot of links to work with. =) 
       * 
       */

      document.addEventListener('click', function(e) {


          // If it isn't an anchor element, don't even bother...
          if (e.target.tagName !== 'A') return;

          if ((e.target.href && e.target.href.indexOf('#') != -1) && ((e.target.pathname == location.pathname) || ('/' + e.target.pathname == location.pathname)) && (e.target.search == location.search)) {

              /** 
               * If everything checks out, 
               * pass the click event and the event target
               * on through to the scrollAnchors function.
               */
              scrollAnchors(e, e.target);

          }


          /** 
           *
           * If you want to target links that have the scroll class, just uncomment the code below (after 
           * commenting out the code above, of course! =D ): 
           *
           */

          //   if (e.target.tagName !== 'A') return; 

          //   if (e.target.className.contains('.scroll')) {

          //      scrollAnchors(e, e.target);

          //   }

      });


      function scrollAnchors(e, respond = null) {
          // const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);

          function distanceToTop(el) {
              return Math.floor(el.getBoundingClientRect().top);
          }

          e.preventDefault();
          var targetID = (respond) ? respond.getAttribute('href') : this.getAttribute('href');
          var targetAnchor = document.querySelector(targetID);
          if (!targetAnchor) return;
          var originalTop = distanceToTop(targetAnchor);
          window.scrollBy({ top: originalTop, left: 0, behavior: 'smooth' });
          var checkIfDone = setInterval(function() {
              var atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
              if (distanceToTop(targetAnchor) === 0 || atBottom) {
                  targetAnchor.tabIndex = '-1';
                  targetAnchor.focus();

                  // Let's make sure the History API even exists first..
                  if ('history' in window) {

                      window.history.pushState('', '', targetID);

                  } else {
                      // Do it the old-fashioned way!
                      window.location = targetID;

                  }

                  clearInterval(checkIfDone);
              }
          }, 100);
      }