var progressBar = document.getElementById('progress-bar');

// Calculate the page height and scroll distance
var pageHeight = document.documentElement.scrollHeight;
var windowHeight = window.innerHeight;
var scrollDistance = pageHeight - windowHeight;

// Update the progress bar on scroll
window.addEventListener('scroll', function() {
    var scrollTop = document.documentElement.scrollTop;
    var progress = scrollTop / scrollDistance;
    progressBar.style.width = progress * 100 + '%';
});

// Update the progress bar on resize
window.addEventListener('resize', function() {
    var scrollTop = document.documentElement.scrollTop;
    var progress = scrollTop / scrollDistance;
    progressBar.style.width = progress * 100 + '%';
});




// This function will be called when the page is scrolled
$(window).scroll(function() {
    // Get the current scroll position
    var scrollTop = $(this).scrollTop();
  
    // Iterate through all the section elements on the page
    $('section').each(function() {
      // Get the position of the section
      var top = $(this).offset().top;
  
      // If the section is in view, fade it in
      if (scrollTop + $(window).height() > top) {
        $(this).fadeTo(10, 1);
      }
    });
  });