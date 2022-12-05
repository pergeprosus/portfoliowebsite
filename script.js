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



// Rottaing text
var words = ['Keith.', 'Driven.', 'Ambitious.'];
var index = 1;

setInterval(function() {
    var rotatingText = document.getElementById('rotating-text');
    rotatingText.innerHTML = words[index];
    index = (index + 1) % words.length;
}, 3000);