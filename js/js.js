 $(document).ready(function () {
     $('.photo_gallery ').slick({
         dots: false,
         arrows: true,
         autoplay: true,
         speed: 3000,
         autoplaySpeed: 300,
         slidesToShow: 3,
         pauseOnHover: false,
         accessibility: Boolean,
         swipe: Boolean,
         centerPadding: '700px',
         variableWidth: true,
         centerMode: true,
         swipeToSlide: true,

     });
 });

 var scroll = window.requestAnimationFrame ||

     function (callback) {
         window.setTimeout(callback, 1000 / 60)
     };
 var elementsToShow = document.querySelectorAll('.show-on-scroll');

 function loop() {
     elementsToShow.forEach(function (element) {
         if (isElementInViewport(element)) {
             element.classList.add('is-visible');
         } else {
             element.classList.remove('is-visible');
         }
     });
     scroll(loop);
 }

 loop();

 // Call the loop for the first time


 function isElementInViewport(el) {
     console.log('is element in viewport')

     if (typeof jQuery === "function" && el instanceof jQuery) {
         el = el[0];
     }
     var rect = el.getBoundingClientRect();
     return (
         (rect.top <= 0 &&
             rect.bottom >= 0) ||
         (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
             rect.top <= (window.innerHeight || document.documentElement.clientHeight)) ||
         (rect.top >= 0 &&
             rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
     );
 }


 // When the user scrolls the page, execute myFunction
 window.onscroll = function () {
     myFunction()
 };

 function myFunction() {
     var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
     var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
     var scrolled = (winScroll / height) * 100;
     document.getElementById("myBar").style.width = scrolled + "%";
 }



        var mybutton = document.getElementById("myBtn");

        // When the user scrolls down 20px from the top of the document, show the button
        window.onscroll = function() {
            scrollFunction()
        };

        function scrollFunction() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                mybutton.style.display = "block";
            } else {
                mybutton.style.display = "none";
            }
        }

        // When the user clicks on the button, scroll to the top of the document
        function topFunction() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }