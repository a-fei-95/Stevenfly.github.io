$(document).ready(function(){
    // Add scrollspy to <body>
    $('body').scrollspy({target: ".sidebar", offset: 50});

    // Add smooth scrolling to all links inside a navbar
    $(".sidebar a").on('click', function(event){

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {

            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash (#)
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area (the speed of the animation)
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        }// End if statement
    });
    

    // Add dimmer to cards
    $('.special.cards .image').dimmer({
        on: 'hover'
    });
});
