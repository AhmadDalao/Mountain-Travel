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