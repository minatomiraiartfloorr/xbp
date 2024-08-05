document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
      var photos = document.querySelectorAll('.photo');
      photos.forEach(function(photo, index) {
        photo.style.animationDelay = (index * 0.5) + 's';
      });
    }, );
});
