const audio = new Audio("../Media/fondo.mp3");
audio.volume = 0.5;
audio.loop = true;

const playButton = document.getElementById("playButton");
playButton.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playButton.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
  } else {
    audio.pause();
    playButton.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
  }
});

const storedVolume = localStorage.getItem("audioVolume");
if (storedVolume !== null) {
  audio.volume = parseFloat(storedVolume);
}

window.addEventListener("beforeunload", () => {
  localStorage.setItem("audioVolume", audio.volume.toString());
});
