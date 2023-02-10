// Get the video button and lightbox
var videoButton = document.getElementById("video-button");
var videoLightbox = document.getElementById("video-lightbox");
var videoFrame = document.getElementById("video-frame");
var videoClose = document.getElementById("video-close");

// When the user clicks the button, open the lightbox
videoButton.onclick = function() {
  videoLightbox.style.display = "block";
  videoFrame.src = "https://www.youtube.com/embed/4HUKxUBTVXY";
}

// When the user clicks on <span> (x), close the lightbox
videoClose.onclick = function() {
  videoLightbox.style.display = "none";
  videoFrame.src = "";
}

// When the user clicks anywhere outside of the lightbox, close it
window.onclick = function(event) {
  if (event.target == videoLightbox) {
    videoLightbox.style.display = "none";
    videoFrame.src = "";
  }
}
