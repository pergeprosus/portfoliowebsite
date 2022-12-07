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

//Function for dropdown menu for mobile view
$('.menu-button').click(function() {
  $('.dropdown-menu').toggle();
});



//Scroll Up and Home Page function for bottom button
//and header logo
  $('#upbutton').click(function() {
    $(window).scrollTop(0);
  });
  var div = document.getElementById('logoname');
  div.addEventListener('click', function() {
    window.location = 'index.html';
  });



