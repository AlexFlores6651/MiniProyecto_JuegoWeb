document.addEventListener("DOMContentLoaded", function() {
  var myAudio = document.getElementById("myAudio");
  myAudio.autoplay = true;
  myAudio.load();
  function togglePlay() {
    
    if (myAudio.paused) {
      myAudio.play();
      document.getElementById("playPauseBtn").innerHTML = '<i class="fa fa-pause"></i>';
    } else {
      myAudio.pause();
      document.getElementById("playPauseBtn").innerHTML = '<i class="fa fa-play"></i>';
    }
  }

  document.getElementById("playPauseBtn").addEventListener("click", togglePlay);
});


