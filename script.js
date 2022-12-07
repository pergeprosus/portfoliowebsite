//Progress Bar for scrolling
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

//scroll attempt
$(document).ready(function() {
  $('#dropdown').hide();

  $('#menubutton').click(function() {
    $('#dropdown').slideToggle();
  });

});




//Todo: make dropdown scroll back up after you click a section to go to
//Todo: add header with fixed stuf to other pages
//Todo: set up placeholder content and prepare for launch








//Scroll Up and Home Page function for bottom button
//and header logo
  $('#upbutton').click(function() {
    $(window).scrollTop(0);
  });
  var div = document.getElementById('logoname');
  div.addEventListener('click', function() {
    window.location = 'index.html';
  });



