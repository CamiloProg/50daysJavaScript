
var currentlyPlayingAudio = null;
function sound(number) {
  if (currentlyPlayingAudio) {
    currentlyPlayingAudio.pause();
    currentlyPlayingAudio.currentTime = 0; // Reset the playback position
}
  var audio = new Audio(`./sounds/audio_${number}.mp3`)
  audio.play()
  currentlyPlayingAudio = audio;
}
