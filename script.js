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







  $('#upbutton').click(function() {
    // Set the scroll position of the page to 0
    $(window).scrollTop(0);
  });

  var div = document.getElementById('logoname');
  div.addEventListener('click', function() {
    window.location = 'index.html';
  });



